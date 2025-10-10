import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private _client: HttpClient = inject(HttpClient);
  private _products = signal<Product[]>([]);
  public allProducts = this._products.asReadonly();

  constructor() {
    // update régulier des produits
    this._refreshProducts();
  }

  private _refreshProducts = async ()=>{
    await this.getProducts();
    setTimeout( this._refreshProducts,10000 );
  }

  public async getProducts(): Promise<Product[]> {
    const products = await firstValueFrom( this._client.get<Product[]>(environment.productsURI) );
    this._products.set(products);
    return products;
  }
  
  public async getProductById(id:number):Promise<Product|null>{
    const url = environment.productURI.replace(":id", id.toString());
    return firstValueFrom( this._client.get<Product|null>(url) );
    // const products = await this.getProducts();
    // return products.find( (p)=>p.id === id) || null;
  }

  public getCart():Promise<Product[]>{
    return firstValueFrom( this._client.get<Product[]>(environment.cartURI) );
  }

  public buy(product:Product):void{
    this._client.post(environment.buyURI, {product: product}, {}).subscribe(()=>{});
  }
}
