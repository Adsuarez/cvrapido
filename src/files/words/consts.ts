import { Languages } from "../consts";

enum Words {
  Contact,
  Skill,
  Languages,
  Summary,
}

const MOBILE_WORD = {
  [Languages.English]: "(Mobile)",
  [Languages.Spanish]: "(Mobile)",
};

const CONTACT_WORD = {
  [Languages.English]: "contact",
  [Languages.Spanish]: "contactar",
};

const SKILL_WORD = {
  [Languages.English]: "top skills",
  [Languages.Spanish]: "aptitudes principales",
};

const LANGUAGE_WORD = {
  [Languages.English]: "languages",
  [Languages.Spanish]: "languages",
};

const SUMMARY_WORD = {
  [Languages.English]: "summary",
  [Languages.Spanish]: "extracto",
};

const WORD_SELECTOR = {
  [Words.Contact]: CONTACT_WORD,
  [Words.Skill]: SKILL_WORD,
  [Words.Languages]: LANGUAGE_WORD,
  [Words.Summary]: SUMMARY_WORD,
};

export { Words, WORD_SELECTOR, MOBILE_WORD, CONTACT_WORD };
