import {
  Contact,
  LanguagesSkill,
  LinkedInResume,
  Skill,
} from "@/files/classes";
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
  const languagesSkill = new LanguagesSkill({ language });
  const linkedinResume = new LinkedInResume({
    contact,
    skill,
    languagesSkill,
    pdfParsed,
    language,
  });
  const contactItems = linkedinResume.getContact;
  return { contactItems };
}
