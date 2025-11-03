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

class LinkedInResume {
  protected contact: ContactItems;
  protected topSkills: TopSkills;

  constructor({
    contact,
    skill,
    pdfParsed,
    language,
  }: {
    contact: Contact;
    skill: Skill;
    pdfParsed: string;
    language: Languages;
  }) {
    const { mobile, email } = extractor({
      pdfParsed,
      contact,
      skill,
      language,
    });

    this.contact = {
      mobile,
      email,
    };
  }

  get getContact() {
    return this.contact;
  }
}

export { Contact, Skill, LinkedInResume, Language };
