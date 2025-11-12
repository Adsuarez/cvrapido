import { LinkedInResume } from "@/files/cv/linkedin-resume.ts";
import {
  type ConversionResponse,
  type ConversionResponseData,
  type ConversionResponseError,
} from "@/files/data-processing/conversion.ts";
import { CertificationsWord, LanguagesWord } from "@/files/words/classes.ts";
import { ContactWord } from "@/files/contact/contact-word.ts";
import { SkillWord } from "@/files/skills/skills-word.ts";
import { SummaryWord } from "@/files/summary/summary-word.ts";
import { ERROR_MESSAGE } from "@/files/data-processing/errors.ts";
import { ExperienceWord } from "@/files/experience/experience-word.ts";
import type { Languages } from "@/files/words/dictionaries.ts";
import { EducationWord } from "../education/education-word";

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
    const educationWord = new EducationWord({ language });
    const linkedinResume = new LinkedInResume({
      contactWord,
      skillWord,
      languagesWord,
      certificationsWord,
      experienceWord,
      summaryWord,
      educationWord,
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
