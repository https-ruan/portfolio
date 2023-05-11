import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerDirective } from './directives/container/container.directive';
import { RouterModule } from '@angular/router';
import { NetworksComponent } from './components/networks/networks.component';

const standaloneComponents = [
  HeaderComponent,
  NetworksComponent,
  FooterComponent,
];

const directives = [ContainerDirective];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule, ...standaloneComponents, RouterModule],
  exports: [...standaloneComponents, ...directives],
})
export class SharedModule {}
