import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CatalogService } from '../services/catalog.service';
import { Product } from '../models/product';
import { LoadingService } from '../services/loading.service';

export const catalogResolver: ResolveFn<Promise<Product[]>> = async (route, state) => {
  const service = inject(CatalogService); 
  const loader = inject(LoadingService); 
  loader.isLoading.set(true);
  const products = await service.getProducts();
  loader.isLoading.set(false);
  return products;
};
