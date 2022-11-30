import {Injectable} from '@angular/core';
import {Cuctomer} from "../model/cuctomer";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<Cuctomer[]> {
    return this.httpClient.get<Cuctomer[]>(
      environment.api_url);
  }


}
