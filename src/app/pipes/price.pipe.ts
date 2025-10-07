import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {

  transform(products: Product[], priceMin:number = 0, priceMax:number = 100): Product[] {
    return products.filter(
      (currentProduct:Product)=>{
        // retourne tous les produits compris en priceMin et priceMax
        return ( currentProduct.price >= priceMin && currentProduct.price <= priceMax );
      }
    )
  }

}
