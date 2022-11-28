import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {CretaeProductComponent} from './cretae-product/cretae-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


const routes: Routes = [
  {path: 'product/list', component: ListProductComponent},
  {path: 'product/create', component: CretaeProductComponent},
  {path: 'products/delete/:id', component: DeleteProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
