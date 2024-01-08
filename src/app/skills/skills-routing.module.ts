import { WindowComponent } from './window/window.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills-component/skills.component';

export const skillsRoutes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    children: [
      {
        path: 'js-ts',
        component: WindowComponent,
        data: { description: 'Javascript and Typescript' },
      },
      {
        path: 'html-css',
        component: WindowComponent,
        data: { description: 'HTML and CSS' },
      },
      {
        path: 'swift',
        component: WindowComponent,
        data: { description: 'Swift' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(skillsRoutes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
