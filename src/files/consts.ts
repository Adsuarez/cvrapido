enum Languages {
  English,
  Spanish,
}

enum Words {
  Contact,
  Skill,
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

const WORD_SELECTOR = {
  [Words.Contact]: CONTACT_WORD,
  [Words.Skill]: SKILL_WORD,
};

export { Languages, Words, WORD_SELECTOR, MOBILE_WORD };
