import { Languages, EMAIL_REGEXP } from "@/files/consts.ts";
import type {
  ContactWord,
  LanguagesSkill,
  SkillWord,
} from "@/files/words/classes.ts";
import { MOBILE_WORD } from "@/files/words/consts.ts";

export function extractor({
  pdfParsed,
  contact,
  skill,
  languagesSkill,
  language,
}: {
  contact: ContactWord;
  skill: SkillWord;
  languagesSkill: LanguagesSkill;
  pdfParsed: string;
  language: Languages;
}) {
  const contactIndex = pdfParsed.search(contact.regexp);
  const skillIndex = pdfParsed.search(skill.regexp);
  const allContact = pdfParsed.slice(contactIndex, skillIndex);

  const mobileIndex = pdfParsed.search(MOBILE_WORD[language]);
  const mobile =
    mobileIndex >= 0
      ? allContact
          .slice(contactIndex + contact.length, mobileIndex)
          .replace("(", "")
          .trim()
      : "";

  const emailIndex = allContact.search(EMAIL_REGEXP);
  const linkedinUrlIndex = allContact.search("www.linkedin");
  const email = allContact
    .slice(emailIndex, linkedinUrlIndex)
    .replaceAll("\n", "");

  const languagesSkillIndex = pdfParsed.search(languagesSkill.regexp);
  const skills = pdfParsed
    .slice(skillIndex + skill.length, languagesSkillIndex)
    .trim()
    .split("\n");

  return { mobile, email, skills };
}
