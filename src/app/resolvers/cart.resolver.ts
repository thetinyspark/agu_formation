import { ResolveFn } from '@angular/router';
import { CatalogService } from '../services/catalog.service';
import { inject } from '@angular/core';
import { Product } from '../models/product';
import { LoadingService } from '../services/loading.service';
import { delay, firstValueFrom, interval, of, take } from 'rxjs';

export const cartResolver: ResolveFn<Promise<Product[]>> = async (route, state) => {
  const service = inject(CatalogService);
  const loader = inject(LoadingService); 

  loader.isLoading.set(true);
  loader.percentage.set(0);
  loader.percentage.set(25);
  // ici on est à 25% du chargement ( simulation )
  const products = await service.getCart();
  loader.percentage.set(75);
  await firstValueFrom( of(null).pipe(delay(100)) );
  loader.percentage.set(100);
  await firstValueFrom( of(null).pipe(delay(100)) );
  loader.isLoading.set(false);
    
  return products;
};
