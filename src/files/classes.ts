import { Languages } from "@/files/consts.ts";
import { extractor } from "@/files/utils/extractor.ts";

import type {
  ContactWord,
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
    contact,
    skill,
    languagesSkill,
    pdfParsed,
    language,
  }: {
    contact: ContactWord;
    skill: SkillWord;
    languagesSkill: LanguagesWord;
    pdfParsed: string;
    language: Languages;
  }) {
    const { mobile, email, skills } = extractor({
      pdfParsed,
      contact,
      skill,
      languagesSkill,
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
