import type { PersonalInformation } from "@/files/personal-information/personal-information.ts";

export function getPersonalInformation({
  startIndex,
  pdfParsed,
  endIndex,
}: {
  startIndex: number;
  pdfParsed: string;
  endIndex: number;
}) {
  const dirtyArray = pdfParsed.slice(startIndex, endIndex).trim().split("\n");
  const location = dirtyArray.pop() ?? "";
  let fullname = "";
  let profession = "";
  const lastElementOnDirtyArray = dirtyArray[dirtyArray.length - 1];
  const isLastElementPartOfAProfession =
    lastElementOnDirtyArray.includes("|") ||
    lastElementOnDirtyArray.includes(", ");

  if (isLastElementPartOfAProfession) {
    const reversedDirtyArray = dirtyArray.toReversed();
    const indexes: number[] = [];

    reversedDirtyArray.forEach((el, index) => {
      if (
        el.includes("|") ||
        el.search(/[1-9]/g) >= 0 ||
        el.includes(" and ") ||
        el.includes(", ")
      ) {
        indexes.push(index);
      }
    });

    const cleanIndexes: number[] = [];

    if (indexes.length > 0) {
      for (let i = 0; i < indexes.length; i++) {
        if (i === 0) {
          cleanIndexes.push(indexes[i]);
        } else {
          const previousElement = indexes[i - 1];
          const isThisElementOnlyOneValueMayorOfPreviousValue =
            previousElement === indexes[i] - 1;
          if (isThisElementOnlyOneValueMayorOfPreviousValue) {
            cleanIndexes.push(indexes[i]);
          } else {
            break;
          }
        }
      }
    }

    const professionChunks = cleanIndexes
      .map((index) => reversedDirtyArray[index])
      .reverse();

    const indexWhereProfessionStarts = dirtyArray.indexOf(professionChunks[0]);
    fullname = dirtyArray[indexWhereProfessionStarts - 1];
    profession = professionChunks.join(" ");
  } else {
    const indexes: number[] = [];

    dirtyArray.forEach((el, index) => {
      if (el.includes(" and ") || el.includes(", ")) {
        indexes.push(index);
      }
    });

    if (indexes.length > 0) {
      profession = dirtyArray.slice(indexes[0], dirtyArray.length).join(" ");
      fullname = dirtyArray[indexes[0] - 1];
    } else {
      profession = dirtyArray.pop() ?? "";
      fullname = dirtyArray.pop() ?? "";
    }
  }

  const personalInformation: PersonalInformation = {
    fullname,
    profession,
    location,
  };

  return personalInformation;
}
