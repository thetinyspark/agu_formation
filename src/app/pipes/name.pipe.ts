import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'name',
  standalone: true
})
export class NamePipe implements PipeTransform {

  transform(products: Product[], name:string = ""): Product[] {
    if( name == "")
      return products;

    return products.filter( 
      (currentProduct:Product)=>{
        const lowerName:string = currentProduct.name.toLowerCase();
        const filterName:string = name.toLowerCase();

        // est-ce que le nom en minuscule de mon produit contient la version minuscule du filtre name ? 
        return lowerName.includes(filterName);
      }
    )
  }

}
