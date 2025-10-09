import { ResolveFn } from '@angular/router';
import { CatalogService } from '../services/catalog.service';
import { inject } from '@angular/core';
import { Product } from '../models/product';

export const cartResolver: ResolveFn<Promise<Product[]>> = async (route, state) => {
  const service = inject(CatalogService); 
  const products = await service.getCart();
  return products;
};
