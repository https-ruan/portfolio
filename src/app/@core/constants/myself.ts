import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { getAge } from '@shared/functions';

export const myself = Object.freeze({
  resume: {
    name: marker('Ruan Araújo'),
    age: getAge('2002-08-20'),
    role: marker('Front-end Developer'),
    currentJob: marker('IBM'),
    description: marker('Welcome to my portfolio! 🙂'),
  },
  experience: [
    { description: marker('years of experience'), value: 3 },
    { description: marker('courses and certifications'), value: 10 },
    { description: marker('worked projects'), value: 12 },
  ],
  hobbies: [
    { name: marker('Musics'), icon: 'musics.svg' },
    { name: marker('Films and Series'), icon: 'films-series.svg' },
    { name: marker('Games'), icon: 'games.svg' },
  ],
});

marker('myself');
marker('name');
marker('age');
marker('role');
marker('currentJob');
marker('description');
