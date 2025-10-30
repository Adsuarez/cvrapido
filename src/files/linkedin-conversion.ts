import type { Languages } from "@/files/consts";
import { getContact } from "@/files/utils/get-contact";

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
