import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private _client: HttpClient = inject(HttpClient);

  constructor() {}

  public getProducts(): Promise<Product[]> {
    return firstValueFrom( this._client.get<Product[]>(environment.productsURI) );
  }

  public async getProductById(id:number):Promise<Product|null>{
    const products = await this.getProducts();
    return products.find( (p)=>p.id === id) || null;
  }

  public getCart():Promise<Product[]>{
     return firstValueFrom( this._client.get<Product[]>(environment.cartURI) );
  }
}
