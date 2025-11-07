import type { ContactItems } from "@/files/contact/contact.ts";
import type { TopSkills } from "@/files/skills/top-skills.ts";
import type { Summary } from "@/files/summary/summary.ts";
import type { PersonalInformation } from "@/files/personal-information/personal-information.ts";

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
