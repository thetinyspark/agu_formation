import { PRODUCTS_MOCK } from '../models/mocks/product-mocks';
import { Product } from '../models/product';
import { PlatformPipe } from './platform.pipe';

fdescribe('PlatformPipe', () => {
  it('create an instance', () => {
    const pipe = new PlatformPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter products by plarform', () => {
    // given
    const pipe = new PlatformPipe();
    const products = PRODUCTS_MOCK;
    const platform = PRODUCTS_MOCK[0].platform;

    // when 
    const results = pipe.transform(products, platform);

    // then
    results.forEach( 
      (product:Product)=>{
        expect(product.platform).toEqual(platform);
      }
    );
  });

  it('should return 0 products with a non existing plarform', () => {
    // given
    const pipe = new PlatformPipe();
    const products = PRODUCTS_MOCK;
    const platform = "not_existing_platform";

    // when 
    const results = pipe.transform(products, platform);

    // then
    expect(results.length).toEqual(0);
  });

  it('should return all the products when platform is an empty string', () => {
    // given
    const pipe = new PlatformPipe();
    const products = PRODUCTS_MOCK;
    const platform = "";

    // when 
    const results = pipe.transform(products, platform);

    // then
    expect(results).toEqual(PRODUCTS_MOCK);
  });
});
