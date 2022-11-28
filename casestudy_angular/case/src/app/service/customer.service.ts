import {Injectable} from '@angular/core';
import {Cuctomer} from "../model/cuctomer";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Cuctomer [] = [
    {
      id: 1,
      name: 'Pham The Son',
      dateOfBirth: "222",
      gender: 1,
      idCard: "10",
      phoneNumber: '0987654321',
      email: '123@gmail.com',
      customerType: 'Thiểu năng số 2 không ai số một',
      address: "20",
    }, {
      id: 2,
      name: 'Trần Viết huy',
      dateOfBirth: "222",
      gender: 2,
      idCard: "10",
      phoneNumber: '0987654321',
      email: '123@gmail.com',
      customerType: 'Lam qick < 5',
      address: "20",
    },
  ]

  constructor() {
  }

  getList() {
    return this.customerList;
  }
}
