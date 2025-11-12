import type { SummaryWord } from "@/files/summary/summary-word.ts";
import type { Summary } from "@/files/summary/summary.ts";

export function summaryExtractor({
  pdfParsed,
  summaryIndex,
  summaryWord,
  experienceIndex,
}: {
  pdfParsed: string;
  summaryIndex: number;
  summaryWord: SummaryWord;
  experienceIndex: number;
}) {
  let summary: Summary = "";

  const hasSummary = summaryIndex >= 0 ? true : false;

  if (hasSummary) {
    summary = pdfParsed
      .slice(summaryIndex + summaryWord.length, experienceIndex)
      .trim()
      .split("\n")
      .join(" ");
  }

  return summary;
}
