import { Languages, type PersonalInformation } from "@/files/consts.ts";
import { extractor } from "@/files/utils/extractor.ts";

import type {
  CertificationsWord,
  ContactWord,
  ExperienceWord,
  LanguagesWord,
  SkillWord,
  SummaryWord,
} from "@/files/words/classes.ts";

export type ContactItems = {
  mobile?: string;
  email?: string;
};

export type TopSkills = {
  skill1?: string;
  skill2?: string;
  skill3?: string;
} | null;

class LinkedInResume {
  protected contact: ContactItems;
  protected topSkills: TopSkills;
  protected personalInformation: PersonalInformation;
  protected summary: string;

  constructor({
    contactWord,
    skillWord,
    languagesWord,
    certificationsWord,
    experienceWord,
    summaryWord,
    pdfParsed,
    language,
  }: {
    contactWord: ContactWord;
    skillWord: SkillWord;
    languagesWord: LanguagesWord;
    certificationsWord: CertificationsWord;
    experienceWord: ExperienceWord;
    summaryWord: SummaryWord;
    pdfParsed: string;
    language: Languages;
  }) {
    const { mobile, email, skills, personalInformation, summary } = extractor({
      pdfParsed,
      contactWord,
      skillWord,
      languagesWord,
      certificationsWord,
      experienceWord,
      summaryWord,
      language,
    });

    this.contact = {
      mobile,
      email,
    };

    const [skill1, skill2, skill3] = skills;

    this.topSkills = {
      skill1,
      skill2,
      skill3,
    };

    this.personalInformation = personalInformation;

    this.summary = summary;
  }

  get getContact() {
    return this.contact;
  }

  get getSkills() {
    return this.topSkills;
  }

  get getPersonalInformation() {
    return this.personalInformation;
  }

  get getSummary() {
    return this.summary;
  }
}

export { LinkedInResume };
