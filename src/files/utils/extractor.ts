import { Languages, EMAIL_REGEXP } from "@/files/consts.ts";
import type {
  ContactWord,
  ExperienceWord,
  LanguagesWord,
  SkillWord,
} from "@/files/words/classes.ts";
import { MOBILE_WORD } from "@/files/words/consts.ts";

export function extractor({
  pdfParsed,
  contactWord,
  skillWord,
  languagesWord,
  experienceWord,
  language,
}: {
  contactWord: ContactWord;
  skillWord: SkillWord;
  languagesWord: LanguagesWord;
  experienceWord: ExperienceWord;
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
  const personalInformation = pdfParsed.slice(
    experienceIndex - 100,
    experienceIndex
  );
  console.log({ personalInformation });

  return { mobile, email, skills };
}
