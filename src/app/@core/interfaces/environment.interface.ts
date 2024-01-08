import { ELanguages } from '@core/i18n/languages.enum';

export interface IEnvironment {
  defaultLanguage: ELanguages;
  supportedLanguages: ELanguages[];
}
