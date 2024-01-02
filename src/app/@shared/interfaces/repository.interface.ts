import { IKeyValuePair } from '@core/interfaces';

export interface IRepository extends IKeyValuePair {
  description: string;
  html_url: string;
  size: number;
  languages_url: string;
  updated_at: string;
  language: string;
  topics: string[];
}
