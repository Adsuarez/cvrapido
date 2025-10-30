import type { Contact, Skill } from "../classes";

export function extractor({
  pdfParsed,
  contact,
  skill,
}: {
  contact: Contact;
  skill: Skill;
  pdfParsed: string;
}) {
  const contactIndex = pdfParsed.search(contact.regexp);
  const skillIndex = pdfParsed.search(skill.regexp);
  const mobileIndex = pdfParsed.search("(Mobile)");
  const allContact = pdfParsed.slice(contactIndex, skillIndex);
  const mobile = allContact
    .slice(contactIndex + contact.length, mobileIndex)
    .replace("(", "")
    .trim();

  return { mobile };
}
