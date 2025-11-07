import { CONTACT_WORD } from "@/files/contact/contact-word.ts";
import { Languages } from "@/files/metadata/language-of-pdf.ts";
import { SKILL_WORD } from "@/files/skills/skills-word.ts";
import { SUMMARY_WORD } from "@/files/summary/summary-word.ts";

enum Words {
  Contact,
  Skill,
  Languages,
  Certifications,
  Summary,
  Experience,
}

const MOBILE_WORD = {
  [Languages.English]: "(Mobile)",
  [Languages.Spanish]: "(Mobile)",
};

const LANGUAGE_WORD = {
  [Languages.English]: "languages\n",
  [Languages.Spanish]: "languages\n",
};

const CERTIFICATIONS_WORD = {
  [Languages.English]: "certifications\n",
  [Languages.Spanish]: "certificaciones\n",
};

const EXPERIENCE_WORD = {
  [Languages.English]: "experience\n",
  [Languages.Spanish]: "experiencia\n",
};

const WORD_SELECTOR = {
  [Words.Contact]: CONTACT_WORD,
  [Words.Skill]: SKILL_WORD,
  [Words.Languages]: LANGUAGE_WORD,
  [Words.Certifications]: CERTIFICATIONS_WORD,
  [Words.Summary]: SUMMARY_WORD,
  [Words.Experience]: EXPERIENCE_WORD,
};

export { Words, WORD_SELECTOR, MOBILE_WORD };
