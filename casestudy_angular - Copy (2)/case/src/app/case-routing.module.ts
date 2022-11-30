import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {FacilityComponent} from "./facility/list-facility/facility.component";
import {CreateFacilityComponent} from "./facility/create-facility/create-facility.component";
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'facility/list', component: FacilityComponent},
  {path: 'facility/create', component: CreateFacilityComponent},
  {path: 'contract/list', component: ListContractComponent},
  {path: 'contract/create', component: CreateContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule {
}
