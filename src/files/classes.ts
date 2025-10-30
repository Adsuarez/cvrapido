import { CONTACT_WORD, type Languages } from "@/files/consts";

class Word {
  text = "";
  length = 0;
  regexp;
  constructor({ language }: { language: Languages }) {
    this.text = CONTACT_WORD[language];
    this.length = this.text.length;
    this.regexp = new RegExp(this.text, "mui");
  }
}

class Contacts extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language });
  }
}

export { Contacts };
