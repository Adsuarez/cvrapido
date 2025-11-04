import { Languages } from "@/files/consts.ts";
import { extractor } from "@/files/utils/extractor.ts";

import type {
  ContactWord,
  ExperienceWord,
  LanguagesWord,
  SkillWord,
} from "@/files/words/classes.ts";

type ContactItems = {
  mobile?: string;
  email?: string;
};

type TopSkills = {
  skill1?: string;
  skill2?: string;
  skill3?: string;
} | null;

class LinkedInResume {
  protected contact: ContactItems;
  protected topSkills: TopSkills;

  constructor({
    contactWord,
    skillWord,
    languagesWord,
    experienceWord,
    pdfParsed,
    language,
  }: {
    contactWord: ContactWord;
    skillWord: SkillWord;
    languagesWord: LanguagesWord;
    experienceWord: ExperienceWord;
    pdfParsed: string;
    language: Languages;
  }) {
    const { mobile, email, skills } = extractor({
      pdfParsed,
      contactWord,
      skillWord,
      languagesWord,
      experienceWord,
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
  }

  get getContact() {
    return this.contact;
  }

  get getSkills() {
    return this.topSkills;
  }
}

export { LinkedInResume };
