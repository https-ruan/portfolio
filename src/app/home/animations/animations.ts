import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from '@angular/animations';

export const whoAmI = trigger('whoAmI', [
  transition(':leave', [
    style({
      position: 'relative',
    }),
    animate(
      '1s 600ms',
      keyframes([
        style({
          rotate: '-25deg',
          left: 0,
          offset: 0.3,
        }),
        style({ left: '100vw', offset: 1 }),
      ])
    ),
  ]),
]);

export const picture = trigger('picture', [
  transition(':enter', [
    style({
      maxHeight: 0,
      scale: 0,
    }),
    animate(
      '1.5s 1.6s',
      keyframes([
        style({
          maxHeight: '100vh',
          offset: 0.2,
        }),
        style({
          scale: 1,
          offset: 1,
        }),
      ])
    ),
  ]),
]);
