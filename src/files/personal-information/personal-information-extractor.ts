import { getPersonalInformation } from "@/files/personal-information/get-personal-information.ts";
import type { PersonalInformation } from "@/files/consts.ts";

export function personalInformationExtractor({
  pdfParsed,
  summaryIndex,
  languagesSkillIndex,
  skillIndex,
  experienceIndex,
}: {
  pdfParsed: string;
  summaryIndex: number;
  languagesSkillIndex: number;
  skillIndex: number;
  experienceIndex: number;
}) {
  let personalInformation: PersonalInformation;

  const hasSummary = summaryIndex >= 0 ? true : false;
  const indexToStartCreationOfPersonalInformation =
    languagesSkillIndex >= 0 ? languagesSkillIndex : skillIndex;

  if (hasSummary) {
    personalInformation = getPersonalInformation({
      startIndex: indexToStartCreationOfPersonalInformation,
      endIndex: summaryIndex,
      pdfParsed,
    });
  } else {
    personalInformation = personalInformation = getPersonalInformation({
      startIndex: indexToStartCreationOfPersonalInformation,
      endIndex: experienceIndex,
      pdfParsed,
    });
  }

  return personalInformation;
}
