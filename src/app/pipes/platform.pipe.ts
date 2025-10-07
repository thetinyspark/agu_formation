import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'platform',
  standalone: true
})
export class PlatformPipe implements PipeTransform {

  transform(products:Product[], platform:string = ""): Product[] {

    if( platform == "")
      return products;

    return products.filter(
      (product:Product)=>{
        if( product.platform == platform )
          return true;

        return false;
      }
    );
  }

}
