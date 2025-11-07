import { WORD_SELECTOR, Words } from "@/files/words/consts.ts";
import type { Languages } from "@/files/metadata/language-of-pdf.ts";

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

class LanguagesWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Languages });
  }
}

class CertificationsWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Certifications });
  }
}

export { Word, LanguagesWord, CertificationsWord };
