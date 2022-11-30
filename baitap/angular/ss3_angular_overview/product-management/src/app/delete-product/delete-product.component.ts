import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {ProductServiceService} from '../service/product-service.service';
import {Ctegory} from '../ctegory';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productForm: FormGroup;
  id: number;
  categoryList: Ctegory[];

  constructor(private productService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
    this.productService.findAllCategory().subscribe(data => {
      this.categoryList = data;
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category.name)
      });
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.router.navigate(['/product/list']);
    });
  }
}
