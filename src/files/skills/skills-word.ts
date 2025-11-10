import { Languages } from "@/files/metadata/language-of-pdf.ts";
import { Word } from "@/files/words/classes.ts";
import { Words } from "@/files/words/dictionaries.ts";

class SkillWord extends Word {
  constructor({ language }: { language: Languages }) {
    super({ language, word: Words.Skill });
  }
}

const SKILL_WORD = {
  [Languages.English]: "top skills\n",
  [Languages.Spanish]: "aptitudes principales\n",
};

export { SkillWord, SKILL_WORD };
