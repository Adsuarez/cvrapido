import type {
  CertificationsWord,
  LanguagesWord,
} from "@/files/words/classes.ts";
import { contactExtractor } from "@/files/contact/contact-extractor.ts";
import { skillsExtractor } from "@/files/skills/skills-extractor.ts";
import { personalInformationExtractor } from "@/files/personal-information/personal-information-extractor.ts";
import { summaryExtractor } from "@/files/summary/summary-extractor.ts";
import type { ContactWord } from "@/files/contact/contact-word.ts";
import type { SkillWord } from "@/files/skills/skills-word.ts";
import type { SummaryWord } from "@/files/summary/summary-word.ts";
import type { ContactItems } from "@/files/contact/contact.ts";
import type { PersonalInformation } from "@/files/personal-information/personal-information.ts";
import type { ExperienceWord } from "@/files/experience/experience-word.ts";
import type { Languages } from "@/files/words/dictionaries.ts";
import { experienceExtractor } from "@/files/experience/experience-extractor.ts";
import type { EducationWord } from "@/files/education/education-word.ts";
import type { Summary } from "@/files/summary/summary.ts";

export function extractor({
  pdfParsed,
  contactWord,
  skillWord,
  languagesWord,
  certificationsWord,
  experienceWord,
  educationWord,
  summaryWord,
  language,
}: {
  contactWord: ContactWord;
  skillWord: SkillWord;
  languagesWord: LanguagesWord;
  certificationsWord: CertificationsWord;
  experienceWord: ExperienceWord;
  summaryWord: SummaryWord;
  educationWord: EducationWord;
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

  const educationIndex = pdfParsed.search(educationWord.regexp);

  const { experience } = experienceExtractor({
    pdfParsed,
    experienceWord,
    experienceIndex,
    educationIndex,
  });

  console.log({ experience });
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

  const summary: Summary = summaryExtractor({
    pdfParsed,
    experienceIndex,
    summaryIndex,
    summaryWord,
  });

  return { mobile, email, skills, personalInformation, summary };
}
