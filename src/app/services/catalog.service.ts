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
  private _cart:Product[] = [];

  constructor() {}

  public getProducts(): Promise<Product[]> {
    return firstValueFrom( this._client.get<Product[]>(environment.productsURI) );
  }

  public async getProductById(id:number):Promise<Product|null>{
    const products = await this.getProducts();
    return products.find( (p)=>p.id === id) || null;
  }

  // normalement, on est censés retourner ici, le contenu de _cart
  // et non pas le contenu du fichier cart.json
  public getCart():Promise<Product[]>{
     return firstValueFrom( this._client.get<Product[]>(environment.cartURI) );
  }

  public buy(product:Product):void{
    // on ajoute à _cart le produit que l'on souhaite acheter
    // (donc stocké dans le panier    
  }
}
