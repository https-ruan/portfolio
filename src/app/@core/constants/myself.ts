import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { age } from '@shared/functions';

export const myself = Object.freeze({
  resume: {
    name: marker('Ruan Araújo'),
    age: age('08-20-2002'),
    role: marker('Front-end Developer'),
    currentJob: marker('IBM'),
    description: marker('Welcome to my portfolio! 🙂'),
  },
  yearsExperience: 3,
  coursesAndCertifications: 10,
  workedProjects: 12,
  hobbies: [marker('Musics'), marker('Films and Series'), marker('Games')],
});

marker('myself');
marker('name');
marker('age');
marker('role');
marker('currentJob');
marker('description');
