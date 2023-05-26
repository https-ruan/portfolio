import { ELanguages } from '@core/i18n';
import { IEnvironment } from '@core/interfaces';

export const environment: IEnvironment = {
  defaultLanguage: ELanguages.ptBR,
  supportedLanguages: [ELanguages.ptBR, ELanguages.enUS],
};
