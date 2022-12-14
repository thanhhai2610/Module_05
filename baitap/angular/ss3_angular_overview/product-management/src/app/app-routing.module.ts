import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {CretaeProductComponent} from './cretae-product/cretae-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';


const routes: Routes = [
  {path: 'product/list', component: ListProductComponent},
  {path: 'product/create', component: CretaeProductComponent},
  {path: 'product/delete/:id', component: DeleteProductComponent},
  {path: 'product/edit/:id', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
