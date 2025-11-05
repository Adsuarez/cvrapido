import { Languages } from "@/files/consts.ts";

enum Words {
  Contact,
  Skill,
  Languages,
  Summary,
  Experience,
}

const MOBILE_WORD = {
  [Languages.English]: "(Mobile)",
  [Languages.Spanish]: "(Mobile)",
};

const CONTACT_WORD = {
  [Languages.English]: "contact\n",
  [Languages.Spanish]: "contactar\n",
};

const SKILL_WORD = {
  [Languages.English]: "top skills\n",
  [Languages.Spanish]: "aptitudes principales\n",
};

const LANGUAGE_WORD = {
  [Languages.English]: "languages\n",
  [Languages.Spanish]: "languages\n",
};

const SUMMARY_WORD = {
  [Languages.English]: "summary\n",
  [Languages.Spanish]: "extracto\n",
};

const EXPERIENCE_WORD = {
  [Languages.English]: "experience\n",
  [Languages.Spanish]: "experiencia\n",
};

const WORD_SELECTOR = {
  [Words.Contact]: CONTACT_WORD,
  [Words.Skill]: SKILL_WORD,
  [Words.Languages]: LANGUAGE_WORD,
  [Words.Summary]: SUMMARY_WORD,
  [Words.Experience]: EXPERIENCE_WORD,
};

export { Words, WORD_SELECTOR, MOBILE_WORD, CONTACT_WORD };
