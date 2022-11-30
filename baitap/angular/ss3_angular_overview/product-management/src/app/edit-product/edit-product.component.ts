import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../service/product-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Ctegory} from '../ctegory';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  categoryList: Ctegory[] = [];
  id: number;
  productFormEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  equals(o1: Ctegory, o2: Ctegory) {
    return o1.id === o2.id;
  }

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
      this.productFormEdit = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category)
      });
    });
  }

  submit() {
    const product = this.productFormEdit.value;
    this.productService.updateProduct(product.id, product).subscribe(data => {
      this.router.navigate(['/product/list']);
    });
  }

}
