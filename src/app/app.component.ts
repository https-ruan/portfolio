import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ELanguages } from '@core/i18n';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '@shared/components/header/header.component';
import { RepositoriesService } from '@shared/services/repositories.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header />
    <app-networks></app-networks>
    <router-outlet></router-outlet>
    <app-footer />
  `,
})
export class AppComponent {
  @ViewChild(HeaderComponent, { read: ElementRef })
  private readonly header!: ElementRef;

  constructor(
    private readonly _titleService: Title,
    private readonly _r2: Renderer2,
    private readonly _translateService: TranslateService,
    private readonly _repositoriesService: RepositoriesService
  ) {
    this.dynamicTitle();
    this._repositoriesService.getRepositories();

    _translateService.use(ELanguages.ptBR);
  }

  private dynamicTitle() {
    const originalTitle = this._titleService.getTitle();
    const steps = '/-\\|';
    const FPS = 2;
    const frameInterval = 1000 / FPS;

    let step = 0;
    let lastTimestep = 0;

    const animation = (timestamp: number) => {
      if (lastTimestep + frameInterval < timestamp) {
        this._titleService.setTitle(`${steps[step++]} ${originalTitle}`);

        step %= steps.length;
        lastTimestep = timestamp;
      }

      window.requestAnimationFrame(animation);
    };

    window.requestAnimationFrame(animation);
  }
}
