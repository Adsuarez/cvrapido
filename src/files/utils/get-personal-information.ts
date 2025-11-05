import type { PersonalInformation } from "@/files/consts.ts";

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
  const isLastElementPartOfAProfession =
    dirtyArray[dirtyArray.length - 1].includes("|");

  if (isLastElementPartOfAProfession) {
    const reversedDirtyArray = dirtyArray.toReversed();
    const professionChunks = reversedDirtyArray
      .filter(
        (element) => element.includes("|") || element.search(/[1-9]/g) >= 0
      )
      .toReversed();

    const indexWhereProfessionStarts = dirtyArray.indexOf(professionChunks[0]);
    fullname = dirtyArray[indexWhereProfessionStarts - 1];
    profession = professionChunks.join(" ");
  } else {
    profession = dirtyArray.pop() ?? "";
    fullname = dirtyArray.pop() ?? "";
  }

  const personalInformation: PersonalInformation = {
    fullname,
    profession,
    location,
  };

  return personalInformation;
}
