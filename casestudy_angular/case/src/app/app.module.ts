import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacilityComponent } from './facility/facility.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilityComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    EditFacilityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
