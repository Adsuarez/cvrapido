import { LinkedInResume } from "@/files/classes";
import type { Languages } from "@/files/consts.ts";
import {
  CertificationsWord,
  ContactWord,
  ExperienceWord,
  LanguagesWord,
  SkillWord,
  SummaryWord,
} from "@/files/words/classes";

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
  const certificationsWord = new CertificationsWord({ language });
  const summaryWord = new SummaryWord({ language });
  const experienceWord = new ExperienceWord({ language });
  const linkedinResume = new LinkedInResume({
    contactWord,
    skillWord,
    languagesWord,
    certificationsWord,
    experienceWord,
    summaryWord,
    pdfParsed,
    language,
  });
  const contactItems = linkedinResume.getContact;
  const topSkills = linkedinResume.getSkills;
  const personalInformation = linkedinResume.getPersonalInformation;
  const summary = linkedinResume.getSummary;
  return { contactItems, topSkills, personalInformation, summary };
}
