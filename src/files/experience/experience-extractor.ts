import { DATES } from "./dates";
import type { Experience } from "./experience";
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

  const temporalArray = allExperienceText
    .trim()
    .split("\n")
    .filter((text) => {
      let isRelevantText = false;
      if (text.length > 0) {
        isRelevantText = true;
      }
      if (text.startsWith("Page")) {
        isRelevantText = false;
      }
      if (text.startsWith("-- ") && text.endsWith(" --")) {
        isRelevantText = false;
      }
      return isRelevantText;
    });
  console.log({ temporalArray });
  const indexesOfDates: number[] = [];
  const indexesOfCompanies: number[] = [];

  const dates = temporalArray.filter((text, index) => {
    let isMonthInText = false;
    DATES.english.forEach((month) => {
      if (text.toLowerCase().startsWith(month)) {
        isMonthInText = true;
        indexesOfDates.push(index);

        const hasMovementsInTheSameCompany =
          temporalArray[index - 2].endsWith(" months");
        const companyIndex = hasMovementsInTheSameCompany
          ? index - 3
          : index - 2;
        indexesOfCompanies.push(companyIndex);
      }
    });
    return isMonthInText;
  });

  console.log({ indexesOfDates, indexesOfCompanies });
  const experiences: Experience[] = [];

  dates.forEach((date) => {
    experiences.push({
      company: "",
      movements: [
        {
          date,
          role: "",
          location: "",
        },
      ],
    });
  });

  console.log({ dates });
  let hasToGroup = false;

  indexesOfDates.forEach((indexOfDate, index, array) => {
    const hasMovementsInTheSameCompany =
      temporalArray[indexOfDate - 2].endsWith(" months");

    if (hasToGroup) {
      hasToGroup = false;
      const beforeDate = array[index - 1];
      console.log("indexOfDate actual: ", indexOfDate);
      console.log("anterior es: ", beforeDate);
      const company = temporalArray[beforeDate - 3];
      console.log("valor del temporal array beforeDate - 3 es: ", company);
      experiences[index].company = company;
    } else if (hasMovementsInTheSameCompany) {
      hasToGroup = true;
      const company = temporalArray[indexOfDate - 3];
      experiences[index].company = company;
    } else {
      const company = temporalArray[indexOfDate - 2];
      experiences[index].company = company;
    }
    //TODO: Pending define if experiences is with movements or separate experiences between diferent companies.
    /*
     const company = hasMovementsInTheSameCompany
        ? temporalArray[indexOfDate - 3]
        : temporalArray[indexOfDate - 2];
      experiences[index].company = company;
    */
    /*console.log({ hasMovementsInTheSameCompany, hasToGroup });
    const company = hasMovementsInTheSameCompany
      ? temporalArray[indexOfDate - 3]
      : temporalArray[indexOfDate - 2];
    experiences[index].company = company;*/
    /*const role = temporalArray[indexOfDate - 1];
    const location = temporalArray[indexOfDate + 1];
    experiences[index].movements[0] = {
      role,
      location,
    };*/

    /*experiences[index].description = indexesOfCompanies.includes(
      indexOfDate + 2
    );*/
  });
  experiences.forEach((experience) => {
    console.log("company: ", experience.company);
    console.log("movements: ", experience.movements);
  });
}
