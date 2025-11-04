import { Languages } from "@/files/consts.ts";
import { extractor } from "@/files/utils/extractor.ts";
import { CONTACT_WORD } from "@/files/words/consts.ts";
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

class LanguageOfPdf {
  is: Languages | null = Languages.Spanish;
  constructor({ pdfParsed }: { pdfParsed: string }) {
    console.log("heeeeeeeeeeeeeeeeeeereeeeeeeeeeeeeeeeeeee: \n");
    let word = CONTACT_WORD[Languages.Spanish];
    let wordWithRegExp = new RegExp(word, "mui");
    let indexOfWord = pdfParsed.search(wordWithRegExp);
    console.log(indexOfWord);
    if (indexOfWord < 0) {
      word = CONTACT_WORD[Languages.English];
      let wordWithRegExp = new RegExp(word, "mui");
      let indexOfWord = pdfParsed.search(wordWithRegExp);
      if (indexOfWord < 0) {
        this.is = null;
      } else {
        this.is = Languages.English;
      }
    }
  }
}

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

export { LinkedInResume, LanguageOfPdf };
