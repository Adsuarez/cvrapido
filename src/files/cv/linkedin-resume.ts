import { extractor } from "@/files/cv/extractor.ts";
import type {
  CertificationsWord,
  LanguagesWord,
} from "@/files/words/classes.ts";
import type { ContactWord } from "@/files/contact/contact-word.ts";
import type { SkillWord } from "@/files/skills/skills-word.ts";
import type { SummaryWord } from "@/files/summary/summary-word.ts";
import type { ContactItems } from "@/files/contact/contact.ts";
import type { TopSkills } from "@/files/skills/top-skills.ts";
import type { PersonalInformation } from "@/files/personal-information/personal-information.ts";
import type { ExperienceWord } from "@/files/experience/experience-word.ts";
import type { Languages } from "@/files/words/dictionaries.ts";

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
