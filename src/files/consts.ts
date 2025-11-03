export type ConversionResponseError = string | null;
export type ConversionResponseData = {};
export type ConversionResponse = {
  data: ConversionResponseData;
  error: ConversionResponseError;
};

const ERROR_MESSAGE = {
  NOT_IS_LINKEDIN:
    "The document provided is not compatible with a LinkedIn resume PDF",
};

enum Languages {
  English = "english",
  Spanish = "spanish",
}

const EMAIL_REGEXP = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/im);

export { Languages, EMAIL_REGEXP, ERROR_MESSAGE };
