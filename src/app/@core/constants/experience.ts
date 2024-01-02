import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { EWorkMode, ETechnologies } from '@shared/enums';

export const experience = Object.freeze([
  {
    enterprise: 'IBM Brazil',
    thumbnail: 'ibm.svg',
    currentJob: true,
    startDate: '09/2022',
    endDate: null,
    role: marker('Application Developer'),
    locale: 'São Paulo - SP',
    mode: EWorkMode.Hybrid,
    description: marker(
      'I work for a client in the banking niche, where I develop micro front-ends for a large card processing and operations system.'
    ),
    techs: [
      ETechnologies.Angular,
      ETechnologies.Typescript,
      ETechnologies.HTML,
      ETechnologies.SCSS,
      ETechnologies.Git,
      ETechnologies.Github,
      ETechnologies.GraphQL,
      ETechnologies.Rest,
      ETechnologies.DevOps,
      ETechnologies.UnitTest,
      ETechnologies.Flame,
      ETechnologies.Karma,
      ETechnologies.Jasmine,
      ETechnologies.Microapps,
    ],
  },
  {
    enterprise: 'Marketdata',
    thumbnail: 'marketdata.jpg',
    currentJob: false,
    startDate: '04/2021',
    endDate: '09/2022',
    role: marker('Development Analyst'),
    locale: 'São Paulo - SP',
    mode: EWorkMode.Remote,
    description: marker(
      'I worked on the front line as Front-end middleware, carrying out integrations between web applications and RESTful APIs in a secure and scalable way. I was also responsible for creating and maintaining new features, Landing Pages and Hotsites with a view to a good structure/organization, flow and user experience with exceptional quality.'
    ),
    techs: [
      ETechnologies.Angular,
      ETechnologies.Typescript,
      ETechnologies.HTML,
      ETechnologies.SCSS,
      ETechnologies.Git,
      ETechnologies.Github,
      ETechnologies.Rest,
    ],
  },
]);
