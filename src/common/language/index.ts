import { enAU, af } from '../';

const LanguageCodes = {
  'en-AU': 'English Australia',
  af: 'Afrikaans'
};

const Languages = {
  'en-AU': enAU,
  af: af
};

const i18n = {
  ...Languages,
  default: 'en-AU'
};

export { LanguageCodes, Languages, i18n };
