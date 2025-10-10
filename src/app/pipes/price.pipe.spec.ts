import { PRODUCTS_MOCK } from '../models/mocks/product-mocks';
import { Product } from '../models/product';
import { PricePipe } from './price.pipe';

fdescribe('PricePipe Test Suite', () => {

  it(
    'create an instance', 
    () => {
      const pipe = new PricePipe();
      expect(pipe).toBeTruthy();
    }
  );

  [
    {min: 0, max: 100},
    {min: 10, max: 20},
    {min: 5, max: 50},
    {min: 30, max: 60}
  ].forEach( 
    (obj)=>{
        it(
          'should return products who are beryond a minimum price', 
          () => {
            // given
            const pipe = new PricePipe();
            const products = PRODUCTS_MOCK;
            const min:number = obj.min;
            const max:number = obj.max;
            
            // when 
            const results = pipe.transform( products, min, max);

            // then 
            results.forEach(
              (product:Product)=>{
                expect(product.price).toBeGreaterThanOrEqual(min);
                expect(product.price).toBeLessThanOrEqual(max);
              }
            );
          }
        );
    }
  )



});
