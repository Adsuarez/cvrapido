import type { Languages } from "./consts";
import { getContact } from "./utils/get-contact";

export async function linkedinConversion({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  console.log(pdfParsed);
  await getContact({ pdfParsed, language });
}
