import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
} from '@ngx-translate/core';

export class MissingTranslationHelper implements MissingTranslationHandler {
  handle({ key }: MissingTranslationHandlerParams): string {
    return `CHAVE NÃO ENCONTRADA: ${key}`;
  }
}
