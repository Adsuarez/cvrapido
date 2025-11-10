import { Word } from "@/files/words/classes.ts";
import { Languages, Words } from "@/files/words/dictionaries.ts";

class SummaryWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Summary });
  }
}

export { SummaryWord };
