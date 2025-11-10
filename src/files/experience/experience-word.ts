import { Languages } from "@/files/metadata/language-of-pdf.ts";
import { Word } from "@/files/words/classes.ts";
import { Words } from "@/files/words/dictionaries.ts";

class ExperienceWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Experience });
  }
}

const EXPERIENCE_WORD = {
  [Languages.English]: "experience\n",
  [Languages.Spanish]: "experiencia\n",
};

export { EXPERIENCE_WORD, ExperienceWord };
