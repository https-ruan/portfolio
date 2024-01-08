import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SkillsComponent } from './skills-component/skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [SkillsComponent, WindowComponent],
  imports: [SharedModule, SkillsRoutingModule],
})
export class SkillsModule {}
