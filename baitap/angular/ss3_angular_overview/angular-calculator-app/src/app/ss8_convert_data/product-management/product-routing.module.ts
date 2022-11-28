import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListProductComponent} from "./list-product/list-product.component";


const  routes: Routes = [
  {path:"product/list", component: ListProductComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
