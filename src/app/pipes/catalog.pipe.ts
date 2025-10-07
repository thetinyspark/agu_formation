import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
import { PlatformPipe } from './platform.pipe';
import { PricePipe } from './price.pipe';
import { NamePipe } from './name.pipe';

@Pipe({
  name: 'catalog',
  standalone: true
})
export class CatalogPipe implements PipeTransform {

  transform(products: Product[], filters:any): Product[] {

    console.log(products, filters);

    const p1 = new PlatformPipe();
    const p2 = new PricePipe();
    const p3 = new NamePipe();

    let results = products;
    results = p1.transform( results, filters.currentPlatform);
    results = p2.transform( results, filters.priceMin, filters.priceMax);
    results = p3.transform( results, filters.nameFilter);

    return results;
  }

}
