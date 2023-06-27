import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skillRoutes: Route[];
  public get isPrimaryRoute(): boolean {
    const routeSplitted = this._router.url.split('/');
    routeSplitted.shift();

    return routeSplitted.length <= 1 ? true : false;
  }

  constructor(
    private readonly _r2: Renderer2,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.skillRoutes = _activatedRoute.routeConfig?.children || [];
  }

  ngOnInit(): void {}

  public toggleActiveClass(component: HTMLElement, index: number): void {
    const activeClass = 'active';

    const siblingComponents = [].slice.call(component.parentElement?.children);

    this._r2.addClass(component, activeClass);
    siblingComponents.forEach((component, i) => {
      i !== index && this._r2.removeClass(component, activeClass);
    });
  }
}
