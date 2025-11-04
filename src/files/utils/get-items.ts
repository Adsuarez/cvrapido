import { LinkedInResume } from "@/files/classes";
import type { Languages } from "@/files/consts.ts";
import { ContactWord, LanguagesWord, SkillWord } from "@/files/words/classes";

export async function getItems({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  const contact = new ContactWord({ language });
  const skill = new SkillWord({ language });
  const languagesSkill = new LanguagesWord({ language });
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
