import { DATES } from "./dates";
import type { ExperienceWord } from "./experience-word";

export function experienceExtractor({
  pdfParsed,
  experienceWord,
  experienceIndex,
  educationIndex,
}: {
  pdfParsed: string;
  experienceWord: ExperienceWord;
  experienceIndex: number;
  educationIndex: number;
}) {
  const allExperienceText = pdfParsed.slice(
    experienceIndex + experienceWord.length,
    educationIndex
  );
  const temporalArray = allExperienceText.split("\n");
  const indexesOfDates: number[] = [];
  const dates = temporalArray.filter((text, index) => {
    if (
      DATES.english.some((date) => text.includes(date)) ||
      DATES.spanish.some((date) => text.includes(date))
    ) {
      indexesOfDates.push(index);
      return true;
    }
  });
  console.log({ dates, indexesOfDates });
}
