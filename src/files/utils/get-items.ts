import { LinkedInResume } from "@/files/classes.ts";
import {
  ERROR_MESSAGE,
  type ConversionResponse,
  type ConversionResponseData,
  type ConversionResponseError,
} from "@/files/consts.ts";
import {
  CertificationsWord,
  ExperienceWord,
  LanguagesWord,
} from "@/files/words/classes.ts";
import { ContactWord } from "@/files/contact/contact-word.ts";
import type { Languages } from "@/files/metadata/language-of-pdf.ts";
import { SkillWord } from "@/files/skills/skills-word.ts";
import { SummaryWord } from "@/files/summary/summary-word.ts";

export async function getItems({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}): Promise<ConversionResponse> {
  try {
    const contactWord = new ContactWord({ language });
    const skillWord = new SkillWord({ language });
    const languagesWord = new LanguagesWord({ language });
    const certificationsWord = new CertificationsWord({ language });
    const summaryWord = new SummaryWord({ language });
    const experienceWord = new ExperienceWord({ language });
    const linkedinResume = new LinkedInResume({
      contactWord,
      skillWord,
      languagesWord,
      certificationsWord,
      experienceWord,
      summaryWord,
      pdfParsed,
      language,
    });
    const contactItems = linkedinResume.getContact;
    const topSkills = linkedinResume.getSkills;
    const personalInformation = linkedinResume.getPersonalInformation;
    const summary = linkedinResume.getSummary;
    const data: ConversionResponseData = {
      contactItems,
      topSkills,
      personalInformation,
      summary,
    };
    const error: ConversionResponseError = null;
    const response: ConversionResponse = { data, error };
    return response;
  } catch {
    const data: ConversionResponseData = null;
    const error: ConversionResponseError = ERROR_MESSAGE.MISSING_INFORMATION;
    const response: ConversionResponse = { data, error };
    return response;
  }
}
