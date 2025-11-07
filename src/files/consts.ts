import type { ContactItems } from "@/files/contact/contact.ts";
import type { TopSkills } from "@/files/skills/top-skills.ts";
import type { Summary } from "@/files/summary/summary.ts";

export type Resume = {
  contactItems: ContactItems;
  topSkills: TopSkills;
  personalInformation: PersonalInformation;
  summary: Summary;
};

export type ConversionResponseError = string | null;

export type ConversionResponseData = Resume | null;

export type ConversionResponse = {
  data: ConversionResponseData;
  error: ConversionResponseError;
};

export type PersonalInformation = {
  fullname: string;
  profession: string;
  location: string;
};

const ERROR_MESSAGE = {
  NOT_IS_LINKEDIN:
    "The document provided is not compatible with a LinkedIn resume PDF",
  MISSING_INFORMATION:
    "Some required information is missing in the document, please be sure to fill your Name, Profession, Location, Languages, summary and experience",
};

export { ERROR_MESSAGE };
