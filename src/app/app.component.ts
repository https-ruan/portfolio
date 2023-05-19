import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header class="container" />
    <app-networks></app-networks>
    <router-outlet></router-outlet>
    <app-footer class="container" />
  `,
})
export class AppComponent {
  @ViewChild(HeaderComponent, { read: ElementRef })
  private readonly header!: ElementRef;

  constructor(
    private readonly _titleService: Title,
    private readonly r2: Renderer2
  ) {
    this.dynamicTitle();
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

  @HostListener('window:scroll', ['$event']) private onScroll(e: Event): void {
    const window = (e.target as Document).defaultView as Window;
    const header = this.header.nativeElement;

    if (!window.scrollY) {
      this.r2.removeClass(header, 'shadow');
    } else {
      this.r2.addClass(header, 'shadow');
    }
  }
}
