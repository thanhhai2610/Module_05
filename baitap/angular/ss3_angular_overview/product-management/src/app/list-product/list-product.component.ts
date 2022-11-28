import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {Router} from '@angular/router';
import {ProductServiceService} from '../service/product-service.service';
import {Ctegory} from '../ctegory';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];


  constructor(private productService: ProductServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productService.getList().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log('that bai');
      },
      () => {
        console.log('Thanh cong');
      });
  }


}
