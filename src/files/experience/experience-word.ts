import { Word } from "@/files/words/classes.ts";
import { Languages, Words } from "@/files/words/dictionaries.ts";

class ExperienceWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Experience });
  }
}

export { ExperienceWord };
