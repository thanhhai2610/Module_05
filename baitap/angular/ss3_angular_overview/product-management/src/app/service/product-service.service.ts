import {Injectable} from '@angular/core';
import {Product} from '../product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Ctegory} from '../ctegory';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      environment.api_url);
  }

  findAllCategory(): Observable<Ctegory[]> {
    return this.httpClient.get<Ctegory[]>(environment.api_url_cate);
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(
      environment.api_url, product);
  }


  findById(id: number) {
    return this.httpClient.get<Product>(environment.api_url + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(environment.api_url + '/' + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(environment.api_url + '/' + id);
  }


}
