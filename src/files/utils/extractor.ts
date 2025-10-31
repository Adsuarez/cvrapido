import type { Contact, Skill } from "../classes";
import { MOBILE_WORD, Languages } from "../consts";

export function extractor({
  pdfParsed,
  contact,
  skill,
  language,
}: {
  contact: Contact;
  skill: Skill;
  pdfParsed: string;
  language: Languages;
}) {
  const contactIndex = pdfParsed.search(contact.regexp);
  const skillIndex = pdfParsed.search(skill.regexp);
  const allContact = pdfParsed.slice(contactIndex, skillIndex);

  const mobileIndex = pdfParsed.search(MOBILE_WORD[language]);
  const mobile = allContact
    .slice(contactIndex + contact.length, mobileIndex)
    .replace("(", "")
    .trim();

  return { mobile };
}
