import { Languages } from "@/files/consts.ts";
import { CONTACT_WORD } from "@/files/words/consts.ts";

class LanguageOfPdf {
  is: Languages | null = Languages.Spanish;
  constructor({ pdfParsed }: { pdfParsed: string }) {
    let word = CONTACT_WORD[Languages.Spanish];
    let wordWithRegExp = new RegExp(word, "mui");
    let indexOfWord = pdfParsed.search(wordWithRegExp);
    console.log(indexOfWord);
    if (indexOfWord < 0) {
      word = CONTACT_WORD[Languages.English];
      let wordWithRegExp = new RegExp(word, "mui");
      let indexOfWord = pdfParsed.search(wordWithRegExp);
      if (indexOfWord < 0) {
        this.is = null;
      } else {
        this.is = Languages.English;
      }
    }
  }
}

export { LanguageOfPdf };
