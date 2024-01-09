import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Constants } from '@core/constants';
import { carouselOpts } from '@shared/constants';
import { RepositoriesService } from '@shared/services/repositories.service';
import { SharedModule } from '@shared/shared.module';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  standalone: true,
  imports: [SharedModule, CarouselModule, MatTooltipModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  private readonly _repositoriesService = inject(RepositoriesService);

  public repositories = this._repositoriesService.repositories;
  public carouselOpts: OwlOptions = {
    ...carouselOpts,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    autoplayMouseleaveTimeout: 5000,
  };
  public highlightedProjects = Constants.highlightedProjects;
}
