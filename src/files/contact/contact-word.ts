import { Word } from "@/files/words/classes.ts";
import { Words } from "@/files/words/dictionaries.ts";
import { Languages } from "@/files/metadata/language-of-pdf.ts";

class ContactWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Contact });
  }
}

const CONTACT_WORD = {
  [Languages.English]: "contact\n",
  [Languages.Spanish]: "contactar\n",
};

export { ContactWord, CONTACT_WORD };
