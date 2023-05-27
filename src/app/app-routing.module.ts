import { marker } from '@colsen1991/ngx-translate-extract-marker';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
    data: { pageName: marker('home') },
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
    loadComponent: () =>
      import('./skills/skills.component').then((c) => c.SkillsComponent),
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
