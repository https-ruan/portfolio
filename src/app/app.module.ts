import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './@components/footer/footer.component';
import { HeaderComponent } from './@components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const mainComponents = [HeaderComponent, FooterComponent];
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, ...mainComponents, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
