import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cartResolver } from './cart.resolver';
import { Product } from '../models/product';

describe('cartResolver', () => {
  const executeResolver: ResolveFn<Promise<Product[]>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => cartResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
