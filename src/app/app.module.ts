import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { FactsComponent } from './components/facts/facts.component';
import { HabitatComponent } from './components/habitat/habitat.component';
import { LinksComponent } from './components/links/links.component';
import { FactCardComponent } from './components/fact-card/fact-card.component';
import { HabitatModalComponent } from './components/habitat-modal/habitat-modal.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TabBarComponent,
    FactsComponent,
    HabitatComponent,
    LinksComponent,
    FactCardComponent,
    HabitatModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
