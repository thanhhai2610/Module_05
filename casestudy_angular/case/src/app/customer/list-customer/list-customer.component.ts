import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {Cuctomer} from "../../model/cuctomer";
import {FacilityService} from "../../service/facility.service";
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
    this.customerList = this._customerService.getList()
  }

}
