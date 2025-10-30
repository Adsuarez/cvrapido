import { CONTACT_WORD, Languages } from "../consts";

class Contacts {
  text = "";
  length = 0;
  regexp;
  constructor({ language }: { language: Languages }) {
    this.text = CONTACT_WORD[language];
    this.length = this.text.length;
    this.regexp = new RegExp(this.text, "mui");
  }
}

export async function getContact({
  pdfParsed,
  language,
}: {
  pdfParsed: string;
  language: Languages;
}) {
  const contact = new Contacts({ language });
  console.log("\n\n----------", contact.text, "-----------\n\n");
  const contactIndex = pdfParsed.search(contact.regexp);
  if (contactIndex >= 0) {
    console.log({ contactIndex });
  }
}
