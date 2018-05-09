import { enAU } from './en-AU';
import { af } from './af';

const DEFAULT_LANGUAGE = 'en-AU';

export const LanguageCodes = {
  DEFAULT_LANGUAGE: 'English Australia',
  af: 'Afrikaans'
};

export const Languages = {
  'en-AU': enAU,
  'af': af
};

export const i18n = {
  ...Languages,
  default: DEFAULT_LANGUAGE
};
