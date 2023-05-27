import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import {
  FooterComponent,
  HeaderComponent,
  NetworksComponent,
} from './components';
import { TypeofPipe } from './pipes';
import { CountUpModule } from 'ngx-countup';

const coreModules = [
  CommonModule,
  RouterModule,
  TranslateModule,
  NgxTypedJsModule,
  CountUpModule,
];

const standaloneComponents = [
  HeaderComponent,
  NetworksComponent,
  FooterComponent,
];

const pipes = [TypeofPipe];

@NgModule({
  declarations: [...pipes],
  imports: [...coreModules, ...standaloneComponents],
  exports: [...coreModules, ...standaloneComponents, ...pipes],
})
export class SharedModule {}
