import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { IHighlightedProject } from '@core/interfaces';
import { ETechnologies } from '@shared/enums';

const thumbsPath = 'assets/projects/highlighted';

export const highlightedProjects: IHighlightedProject[] = [
  {
    name: 'Portfolio',
    thumbnail: `${thumbsPath}/portfolio.jpg`,
    description: marker(
      'This repository hosts the source code of my personal portfolio, showcasing a collection of my most recent and relevant projects. Explore my work, skills, and experiences in this space, demonstrating my passion and commitment to web development and other creative projects.'
    ),
    github: 'https://github.com/https-ruan/portfolio',
    url: 'https://ruan-dev.vercel.app',
    techs: [ETechnologies.AngularJS, ETechnologies.Typescript],
  },
];
