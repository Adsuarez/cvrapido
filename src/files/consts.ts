export type ConversionResponseError = string | null;
export type ConversionResponseData = {};
export type ConversionResponse = {
  data: ConversionResponseData;
  error: ConversionResponseError;
};

const ERROR_MESSAGE = {
  NOT_IS_LINKEDIN:
    "The document provided is not compatible with a LinkedIn resume PDF",
};

enum Languages {
  English = "english",
  Spanish = "spanish",
}

enum Words {
  Contact,
  Skill,
  Languages,
}

const EMAIL_REGEXP = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/im);

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

const WORD_SELECTOR = {
  [Words.Contact]: CONTACT_WORD,
  [Words.Skill]: SKILL_WORD,
  [Words.Languages]: LANGUAGE_WORD,
};

export {
  Languages,
  Words,
  WORD_SELECTOR,
  MOBILE_WORD,
  EMAIL_REGEXP,
  CONTACT_WORD,
  ERROR_MESSAGE,
};
