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
  const contactWord = new ContactWord({ language });
  const skillWord = new SkillWord({ language });
  const languagesWord = new LanguagesWord({ language });
  const linkedinResume = new LinkedInResume({
    contactWord,
    skillWord,
    languagesWord,
    pdfParsed,
    language,
  });
  const contactItems = linkedinResume.getContact;
  const topSkills = linkedinResume.getSkills;
  return { contactItems, topSkills };
}
