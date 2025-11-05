import type { PersonalInformation } from "../consts";

const START_INDEX_OFFSET = 150;
export function getPersonalInformation({
  index,
  pdfParsed,
}: {
  index: number;
  pdfParsed: string;
}) {
  const dirtyArray = pdfParsed
    .slice(index - START_INDEX_OFFSET, index)
    .trim()
    .split("\n");
  const location = dirtyArray.pop() ?? "";
  const profession = dirtyArray.pop() ?? "";
  const fullname = dirtyArray.pop() ?? "";

  const personalInformation: PersonalInformation = {
    fullname,
    profession,
    location,
  };
  return personalInformation;
}
