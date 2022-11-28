import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})

export class ListProductComponent implements OnInit {
  products: Product[] | undefined;

  // index: number = 0;

  constructor(private _productService: ProductService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.products = this._productService.getList()
  }

  getList() {
    this.products = this._productService.getList()
  }


}
