import { ResolveFn } from '@angular/router';
import { CatalogService } from '../services/catalog.service';
import { inject } from '@angular/core';
import { Product } from '../models/product';
import { LoadingService } from '../services/loading.service';

export const cartResolver: ResolveFn<Promise<Product[]>> = async (route, state) => {
  const service = inject(CatalogService);
  const loader = inject(LoadingService); 

  loader.isLoading.set(true);
  // ici on est à 25% du chargement ( simulation )
  const products = await service.getCart();

  // ici on est à 75% du téléchargement
  loader.isLoading.set(false);

  // 1s plus tard (utilisez of + delay) on est à 100
  return products;
};
