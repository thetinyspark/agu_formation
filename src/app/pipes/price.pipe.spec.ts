import { Product } from '../models/product';
import { PricePipe } from './price.pipe';

const MOCK_PRODUCTS:Product[] = [
  {id: 1, desc: "", img: "", name : "",platform: "", price: 10},
  {id: 2, desc: "", img: "", name : "",platform: "", price: 20},
  {id: 3, desc: "", img: "", name : "",platform: "", price: 30},
  {id: 4, desc: "", img: "", name : "",platform: "", price: 40},
  {id: 5, desc: "", img: "", name : "",platform: "", price: 50},
  {id: 6, desc: "", img: "", name : "",platform: "", price: 60},
];

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
            const products = MOCK_PRODUCTS;
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
