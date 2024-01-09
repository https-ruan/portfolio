import { OwlOptions } from 'ngx-owl-carousel-o';

export const carouselOpts: OwlOptions = Object.freeze({
  nav: true,
  navText: [
    "<img src='assets/experience/prev.svg' />",
    "<img src='assets/experience/next.svg' />",
  ],
  loop: true,
  responsiveRefreshRate: 1,
  responsive: {
    0: {
      items: 1,
    },
  },
});
