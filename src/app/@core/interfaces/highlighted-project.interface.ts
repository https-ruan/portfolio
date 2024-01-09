import { ETechnologies } from '@shared/enums';

export interface IHighlightedProject {
  name: string;
  description: string;
  thumbnail: string;
  url: string;
  github: string;
  techs: ETechnologies[];
}
