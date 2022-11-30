import {CustomerType} from "./customer-type";

export interface Cuctomer {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  gender?: number;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  customerType?: CustomerType;
  address?: string;
}
