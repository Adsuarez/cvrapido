enum Languages {
  English = "english",
  Spanish = "spanish",
}

enum Words {
  Contact,
  Skill,
  Languages,
  Certifications,
  Summary,
  Experience,
  Education,
}

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

const CERTIFICATIONS_WORD = {
  [Languages.English]: "certifications\n",
  [Languages.Spanish]: "certificaciones\n",
};

const SUMMARY_WORD = {
  [Languages.English]: "summary\n",
  [Languages.Spanish]: "extracto\n",
};

const EXPERIENCE_WORD = {
  [Languages.English]: "experience\n",
  [Languages.Spanish]: "experiencia\n",
};

const EDUCATION_WORD = {
  [Languages.English]: "education\n",
  [Languages.Spanish]: "educación\n",
};

const MOBILE_WORD = {
  [Languages.English]: "(Mobile)",
  [Languages.Spanish]: "(Mobile)",
};

const WORD_SELECTOR = {
  [Words.Contact]: CONTACT_WORD,
  [Words.Skill]: SKILL_WORD,
  [Words.Languages]: LANGUAGE_WORD,
  [Words.Certifications]: CERTIFICATIONS_WORD,
  [Words.Summary]: SUMMARY_WORD,
  [Words.Experience]: EXPERIENCE_WORD,
  [Words.Education]: EDUCATION_WORD,
};

export { Words, WORD_SELECTOR, Languages, CONTACT_WORD, MOBILE_WORD };
