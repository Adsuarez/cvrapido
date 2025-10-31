import { Contact, LinkedInResume, Skill } from "@/files/classes";
import { Languages } from "@/files/consts";

export async function getContact({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  const contact = new Contact({ language });
  const skill = new Skill({ language });
  const linkedinResume = new LinkedInResume({
    contact,
    skill,
    pdfParsed,
    language,
  });

  console.log("\n\n----------", contact.text, "-----------\n\n");
  const contactItems = linkedinResume.getContact;
  console.log({ contactItems });
}
