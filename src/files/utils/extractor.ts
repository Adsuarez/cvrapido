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
import { personalInformationExtractor } from "@/files/personal-information/personal-information-extractor";
import { summaryExtractor } from "@/files/summary/summary-extractor";

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

  const summary = summaryExtractor({
    pdfParsed,
    experienceIndex,
    summaryIndex,
    summaryWord,
  });

  return { mobile, email, skills, personalInformation, summary };
}
