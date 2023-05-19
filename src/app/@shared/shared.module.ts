import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  HeaderComponent,
  NetworksComponent,
} from './components';
import { TypeofPipe } from './pipes';

const standaloneComponents = [
  HeaderComponent,
  NetworksComponent,
  FooterComponent,
];

const pipes = [TypeofPipe];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule, RouterModule, ...standaloneComponents],
  exports: [...standaloneComponents, ...pipes],
})
export class SharedModule {}
