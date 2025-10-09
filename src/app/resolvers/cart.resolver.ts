import { ResolveFn } from '@angular/router';
import { CatalogService } from '../services/catalog.service';
import { inject } from '@angular/core';
import { Product } from '../models/product';
import { LoadingService } from '../services/loading.service';

export const cartResolver: ResolveFn<Promise<Product[]>> = async (route, state) => {
  const service = inject(CatalogService);
  const loader = inject(LoadingService); 

  loader.startLoading();
  loader.setProgress(25);
  const products = await service.getCart();
  loader.setProgress(100);
  return products;
};
