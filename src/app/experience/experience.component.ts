import { Component } from '@angular/core';
import { Constants } from '@core/constants';
import { EWorkMode } from '@shared/enums';
import { SharedModule } from '@shared/shared.module';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SharedModule, CarouselModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public experiences = Constants.experience;
  public workMode = EWorkMode;

  public carouselOpts: OwlOptions = {
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
  };
}
