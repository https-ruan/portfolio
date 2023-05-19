import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, SharedModule, NgxTypedJsModule],
  exports: [WelcomeComponent],
})
export class SectionsModule {}
