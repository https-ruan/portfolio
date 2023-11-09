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

    return routeSplitted.length <= 1;
  }

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.skillRoutes = _activatedRoute.routeConfig?.children || [];
  }

  ngOnInit(): void {}
}
