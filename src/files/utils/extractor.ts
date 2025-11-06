import { Languages, type PersonalInformation } from "@/files/consts.ts";
import type {
  CertificationsWord,
  ContactWord,
  ExperienceWord,
  LanguagesWord,
  SkillWord,
  SummaryWord,
} from "@/files/words/classes.ts";
import { contactExtractor } from "@/files/contact/contact-extractor.ts";
import type { ContactItems } from "@/files/classes.ts";
import { skillsExtractor } from "@/files/skills/skills-extractor.ts";
import { personalInformationExtractor } from "../personal-information/personal-information-extractor";

export function extractor({
  pdfParsed,
  contactWord,
  skillWord,
  languagesWord,
  certificationsWord,
  experienceWord,
  summaryWord,
  language,
}: {
  contactWord: ContactWord;
  skillWord: SkillWord;
  languagesWord: LanguagesWord;
  certificationsWord: CertificationsWord;
  experienceWord: ExperienceWord;
  summaryWord: SummaryWord;
  pdfParsed: string;
  language: Languages;
}) {
  const skillIndex = pdfParsed.search(skillWord.regexp);

  const contactItems: ContactItems = contactExtractor({
    pdfParsed,
    language,
    contactWord,
    skillIndex,
  });

  const { email, mobile } = contactItems;

  const languagesSkillIndex = pdfParsed.search(languagesWord.regexp);

  const skills = skillsExtractor({
    pdfParsed,
    skillIndex,
    skillWord,
    languagesSkillIndex,
  });

  const certificationsIndex = pdfParsed.search(certificationsWord.regexp);

  const experienceIndex = pdfParsed.search(experienceWord.regexp);

  const summaryIndex = pdfParsed.search(summaryWord.regexp);

  const personalInformation: PersonalInformation = personalInformationExtractor(
    {
      pdfParsed,
      experienceIndex,
      languagesSkillIndex,
      skillIndex,
      summaryIndex,
    }
  );

  let summary = "";

  const hasSummary = summaryIndex >= 0 ? true : false;

  if (hasSummary) {
    summary = pdfParsed
      .slice(summaryIndex + summaryWord.length, experienceIndex)
      .trim()
      .split("\n")
      .join(" ");
  }

  return { mobile, email, skills, personalInformation, summary };
}
