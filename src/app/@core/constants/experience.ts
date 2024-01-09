import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { IExperiences } from '@core/interfaces';
import { EWorkMode, ETechnologies } from '@shared/enums';

export const experience: IExperiences = Object.freeze({
  jobs: [
    {
      enterprise: 'IBM Brazil',
      thumbnail: 'ibm.svg',
      currentJob: true,
      startDate: '09/2022',
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
        ETechnologies.MVVM,
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
        ETechnologies.Gilab,
        ETechnologies.JSP,
        ETechnologies.Dotnet,
      ],
    },
  ],
  courses: [
    {
      name: marker('Systems Analysis and Development'),
      description: marker(
        `The course offers subjects aimed at Full Stack training, with subjects aimed at presenting concepts for Front-End and Back-End development.<br /><br />The main duties of the Systems Analysis and Development Technologist are to analyze, design, document, specify, test, deploy and maintain computer systems.`
      ),
      thumbnail: 'uninove.png',
      date: '01/2020 - 06/2022',
    },
    {
      name: marker(
        'Angular 13 training - Getting started by creating 7 projects'
      ),
      description: marker(``),
      thumbnail: 'udemy.png',
      hours: 11,
    },
    {
      name: marker('Understanding TypeScript'),
      description: marker(``),
      thumbnail: 'udemy.png',
      hours: 11.5,
    },
    {
      name: marker('Angular 2 Course (v17+) Typescript from Basic to Advanced'),
      description: marker(``),
      thumbnail: 'udemy.png',
      hours: 27,
    },
    {
      name: marker('IBM Garage Foundation'),
      description: marker(``),
      thumbnail: 'ibm.svg',
      date: '11/2022',
    },
    {
      name: marker('IBM Garage Essentials'),
      description: marker(``),
      thumbnail: 'ibm.svg',
      date: '11/2022',
    },
    {
      name: marker('IBM Consulting Way'),
      description: marker(``),
      thumbnail: 'ibm.svg',
      date: '12/2022',
    },
    {
      name: marker('IBM Cloud Essentials'),
      description: marker(``),
      thumbnail: 'ibm.svg',
      date: '02/2023',
    },
    {
      name: marker('Enterprise Design Thinking Practitioner'),
      description: marker(``),
      thumbnail: 'ibm.svg',
      date: '02/2023',
    },
    {
      name: marker('Scrum Foundation Professional Certification SFPC™'),
      description: marker(``),
      thumbnail: 'certiprof.png',
      date: '03/2023',
    },
    {
      name: marker('IBM Agile Explorer'),
      description: marker(``),
      thumbnail: 'ibm.svg',
      date: '03/2023',
    },
    {
      name: marker('IBM Cloud Core'),
      description: marker(``),
      thumbnail: 'ibm.svg',
      date: '03/2023',
    },
  ],
});
