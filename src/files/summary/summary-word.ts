import { Languages } from "@/files/metadata/language-of-pdf.ts";
import { Word } from "@/files/words/classes.ts";
import { Words } from "@/files/words/dictionaries.ts";

class SummaryWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Summary });
  }
}

const SUMMARY_WORD = {
  [Languages.English]: "summary\n",
  [Languages.Spanish]: "extracto\n",
};

export { SummaryWord, SUMMARY_WORD };
