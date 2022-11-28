import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListProductComponent} from './list-product/list-product.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CretaeProductComponent} from './cretae-product/cretae-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    CretaeProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
