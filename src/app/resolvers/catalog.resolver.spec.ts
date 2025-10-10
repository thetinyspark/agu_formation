import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { catalogResolver } from './catalog.resolver';
import { Product } from '../models/product';

describe('catalogResolver', () => {
  const executeResolver: ResolveFn<Promise<Product[]>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => catalogResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
