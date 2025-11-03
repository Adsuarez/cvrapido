import type { Languages } from "@/files/consts.ts";
import { WORD_SELECTOR, Words } from "@/files/words/consts.ts";

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

export { Contact, Skill, LanguagesSkill };
