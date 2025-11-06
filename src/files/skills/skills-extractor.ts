import type { SkillWord } from "@/files/words/classes.ts";

export function skillsExtractor({
  pdfParsed,
  skillIndex,
  skillWord,
  languagesSkillIndex,
}: {
  pdfParsed: string;
  skillIndex: number;
  skillWord: SkillWord;
  languagesSkillIndex: number;
}) {
  const skills = pdfParsed
    .slice(skillIndex + skillWord.length, languagesSkillIndex)
    .trim()
    .split("\n");

  return skills;
}
