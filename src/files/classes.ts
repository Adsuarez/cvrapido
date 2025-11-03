import { WORD_SELECTOR, Languages, Words, CONTACT_WORD } from "@/files/consts";
import { extractor } from "./utils/extractor";

type ContactItems = {
  mobile?: string;
  email?: string;
};

type TopSkills = {
  skill1?: string;
  skill2?: string;
  skill3?: string;
} | null;

class Language {
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
class Word {
  text = "";
  length = 0;
  regexp;
  constructor({ language, word }: { language: Languages; word: Words }) {
    this.text = WORD_SELECTOR[word][language];
    this.length = this.text.length;
    this.regexp = new RegExp(this.text, "mui");
  }
}

class Contact extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Contact });
  }
}

class Skill extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Skill });
  }
}

class LanguagesSkill extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Languages });
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
    contact: Contact;
    skill: Skill;
    languagesSkill: LanguagesSkill;
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

export { Contact, Skill, LinkedInResume, Language, LanguagesSkill };
