import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FacilityComponent} from './facility/list-facility/facility.component';
import {HeaderComponent} from './header_footer_nav/header/header.component';
import {FooterComponent} from './header_footer_nav/footer/footer.component';
import {NavComponent} from './header_footer_nav/nav/nav.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {RouterModule} from "@angular/router";
import {CaseRoutingModule} from "./case-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacilityComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    EditFacilityComponent,
    CreateFacilityComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    CreateContractComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    CaseRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
