import { Contact, LinkedInResume, Skill } from "@/files/classes";
import type { Languages } from "../consts";

export async function getItems({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  const contact = new Contact({ language });
  const skill = new Skill({ language });
  const linkedinResume = new LinkedInResume({
    contact,
    skill,
    pdfParsed,
    language,
  });
  const contactItems = linkedinResume.getContact;
  return { contactItems };
}
