import {Component, OnInit} from '@angular/core';
import {Cuctomer} from "../../model/cuctomer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerList: Cuctomer [];

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this._customerService.getList().subscribe(data => {
      this.customerList = data;
    })
  }

}
