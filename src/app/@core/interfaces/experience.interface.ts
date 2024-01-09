import { ETechnologies, EWorkMode } from '@shared/enums';

export interface IExperiences {
  jobs: IJob[];
  courses: ICourse[];
}

interface IJob {
  enterprise: string;
  thumbnail: string;
  currentJob: boolean;
  startDate: string;
  endDate?: string;
  role: string;
  locale: string;
  mode: EWorkMode;
  description: string;
  techs: ETechnologies[];
}

interface ICourse {
  name: string;
  description: string;
  thumbnail: string;
  date?: string;
  hours?: number;
}
