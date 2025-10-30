import type { TextResult } from "pdf-parse";

export async function linkedinConversion({
  pdfParsed,
}: {
  pdfParsed: TextResult;
}) {
  console.log(pdfParsed.text);
}
