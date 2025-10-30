import { WORD_SELECTOR, Languages, Words } from "@/files/consts";
import { extractor } from "./utils/extractor";

type ContactItems = {
  mobile?: string;
};

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

  constructor({
    contact,
    skill,
    pdfParsed,
  }: {
    contact: Contact;
    skill: Skill;
    pdfParsed: string;
  }) {
    const { mobile } = extractor({ pdfParsed, contact, skill });

    this.contact = {
      mobile,
    };
  }

  get getContact() {
    return this.contact;
  }
}

export { Contact, Skill, LinkedInResume };
