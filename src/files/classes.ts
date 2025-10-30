import { CONTACT_WORD, type Languages } from "@/files/consts";

class Contacts {
  text = "";
  length = 0;
  regexp;
  constructor({ language }: { language: Languages }) {
    this.text = CONTACT_WORD[language];
    this.length = this.text.length;
    this.regexp = new RegExp(this.text, "mui");
  }
}

export { Contacts };
