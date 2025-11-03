import { LinkedInResume } from "@/files/classes";
import type { Languages } from "../consts";
import { Contact, LanguagesSkill, Skill } from "../words/classes";

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
  const topSkills = linkedinResume.getSkills;
  return { contactItems, topSkills };
}
