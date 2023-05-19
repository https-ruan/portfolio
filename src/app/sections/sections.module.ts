import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

const sections = [WelcomeComponent, AboutComponent];

@NgModule({
  declarations: [...sections],
  imports: [CommonModule, SharedModule, NgxTypedJsModule],
  exports: [...sections],
})
export class SectionsModule {}
