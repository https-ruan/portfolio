import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

const sections = [WelcomeComponent, AboutComponent];

@NgModule({
  declarations: [...sections],
  imports: [SharedModule],
  exports: [...sections],
})
export class SectionsModule {}
