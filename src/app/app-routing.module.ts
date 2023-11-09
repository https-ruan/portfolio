import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@colsen1991/ngx-translate-extract-marker';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    data: { pageName: marker('home'), exact: true },
  },
  {
    path: marker('about'),
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: marker('experience'),
    loadComponent: () =>
      import('./experience/experience.component').then(
        (c) => c.ExperienceComponent
      ),
  },
  {
    path: marker('skills'),
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: marker('projects'),
    loadComponent: () =>
      import('./projects/projects.component').then((c) => c.ProjectsComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
