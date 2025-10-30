import { WORD_SELECTOR, Languages, Words } from "@/files/consts";

type ContactItems = string;

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
    const contactIndex = pdfParsed.search(contact.regexp);
    const skillIndex = pdfParsed.search(skill.regexp);
    this.contact = pdfParsed.slice(contactIndex, skillIndex);
  }

  get getContact() {
    return this.contact;
  }
}

export { Contact, Skill, LinkedInResume };
