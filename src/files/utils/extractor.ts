import type { Contact, LanguagesSkill, Skill } from "../classes";
import { MOBILE_WORD, Languages, EMAIL_REGEXP } from "../consts";

export function extractor({
  pdfParsed,
  contact,
  skill,
  languagesSkill,
  language,
}: {
  contact: Contact;
  skill: Skill;
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
