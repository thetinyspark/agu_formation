import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../models/mocks/product-mocks';

@Injectable({
  providedIn: 'root'
})
export class CatalogServerService {

  private _cart:Product[] = [];

  constructor() { }

  public addToCart(product:Product):void{
    this._cart.push(product);
  }

  public getCart():Product[]{
    return this._cart;
  }

  public getProducts():Product[]{
    return PRODUCTS_MOCK;
  }
}
