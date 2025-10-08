import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private _client: HttpClient = inject(HttpClient);

  constructor() {}

  public getProducts(): Observable<Product[]> {
    return this._client.get<Product[]>(environment.productsURI);
  }
}
