import { Languages, type PersonalInformation } from "@/files/consts.ts";
import type {
  CertificationsWord,
  ContactWord,
  ExperienceWord,
  LanguagesWord,
  SkillWord,
  SummaryWord,
} from "@/files/words/classes.ts";
import { getPersonalInformation } from "@/files/utils/get-personal-information.ts";
import { contactExtractor } from "@/files/contact/contact-extractor.ts";
import type { ContactItems } from "@/files/classes.ts";
import { skillsExtractor } from "@/files/skills/skills-extractor.ts";

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
  let personalInformation: PersonalInformation;
  const summaryIndex = pdfParsed.search(summaryWord.regexp);
  const hasSummary = summaryIndex >= 0 ? true : false;
  let summary = "";
  const indexToStartCreationOfPersonalInformation =
    languagesSkillIndex >= 0 ? languagesSkillIndex : skillIndex;

  if (hasSummary) {
    personalInformation = getPersonalInformation({
      startIndex: indexToStartCreationOfPersonalInformation,
      endIndex: summaryIndex,
      pdfParsed,
    });
    summary = pdfParsed
      .slice(summaryIndex + summaryWord.length, experienceIndex)
      .trim()
      .split("\n")
      .join(" ");
  } else {
    personalInformation = personalInformation = getPersonalInformation({
      startIndex: indexToStartCreationOfPersonalInformation,
      endIndex: experienceIndex,
      pdfParsed,
    });
  }

  return { mobile, email, skills, personalInformation, summary };
}
