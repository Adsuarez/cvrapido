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

  const emailIndex = allContact.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/im);
  const linkedinUrlIndex = allContact.search("www.linkedin");
  const email = allContact
    .slice(emailIndex, linkedinUrlIndex)
    .replaceAll("\n", "");

  return { mobile, email };
}
