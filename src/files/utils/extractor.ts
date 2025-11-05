import {
  Languages,
  EMAIL_REGEXP,
  type PersonalInformation,
} from "@/files/consts.ts";
import type {
  ContactWord,
  ExperienceWord,
  LanguagesWord,
  SkillWord,
  SummaryWord,
} from "@/files/words/classes.ts";
import { MOBILE_WORD } from "@/files/words/consts.ts";
import { getPersonalInformation } from "./get-personal-information";

export function extractor({
  pdfParsed,
  contactWord,
  skillWord,
  languagesWord,
  experienceWord,
  summaryWord,
  language,
}: {
  contactWord: ContactWord;
  skillWord: SkillWord;
  languagesWord: LanguagesWord;
  experienceWord: ExperienceWord;
  summaryWord: SummaryWord;
  pdfParsed: string;
  language: Languages;
}) {
  const contactIndex = pdfParsed.search(contactWord.regexp);
  const skillIndex = pdfParsed.search(skillWord.regexp);
  const allContact = pdfParsed.slice(contactIndex, skillIndex);

  const mobileIndex = pdfParsed.search(MOBILE_WORD[language]);
  const mobile =
    mobileIndex >= 0
      ? allContact
          .slice(contactIndex + contactWord.length, mobileIndex)
          .replace("(", "")
          .trim()
      : "";

  const emailIndex = allContact.search(EMAIL_REGEXP);
  const linkedinUrlIndex = allContact.search("www.linkedin");
  const email = allContact
    .slice(emailIndex, linkedinUrlIndex)
    .replaceAll("\n", "");

  const languagesSkillIndex = pdfParsed.search(languagesWord.regexp);
  const skills = pdfParsed
    .slice(skillIndex + skillWord.length, languagesSkillIndex)
    .trim()
    .split("\n");

  const experienceIndex = pdfParsed.search(experienceWord.regexp);
  let personalInformation: PersonalInformation;
  const summaryIndex = pdfParsed.search(summaryWord.regexp);
  const hasSummary = summaryIndex >= 0 ? true : false;
  let summary = "";
  if (hasSummary) {
    personalInformation = getPersonalInformation({
      index: summaryIndex,
      pdfParsed,
    });
    summary = pdfParsed
      .slice(summaryIndex + summaryWord.length, experienceIndex)
      .trim()
      .split("\n")
      .join("");
  } else {
    personalInformation = personalInformation = getPersonalInformation({
      index: experienceIndex,
      pdfParsed,
    });
  }

  return { mobile, email, skills, personalInformation, summary };
}
