import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import { IProduct } from '../model/Iproduct';
import {ActivatedRoute, Router} from "@angular/router";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] =[];
  index: number = 0;

  constructor(private _productService: ProductService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this.getAll(this.index);
  }
  getAll(index: number){
    this.index = this._activatedRoute.snapshot.params['index'];
    if(isNotNullOrUndefined(this.index)){
      this._productService.deleteProduct(this.index);
    }
    this.products =this._productService.getAll();
    this._router.navigate(['product/list']);

  }


}
