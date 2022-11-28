import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../service/product-service.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Ctegory} from '../ctegory';

@Component({
  selector: 'app-cretae-product',
  templateUrl: './cretae-product.component.html',
  styleUrls: ['./cretae-product.component.css']
})
export class CretaeProductComponent implements OnInit {

  categoryList: Ctegory[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit() {
    this.productService.findAllCategory().subscribe(data => {
      this.categoryList = data;
    });
  }

  submit() {
    const product = this.productForm.value;
    product.category = {name: product.category};
    this.productService.save(product).subscribe(data => {
      this.productForm.reset();
    });

  }
}
