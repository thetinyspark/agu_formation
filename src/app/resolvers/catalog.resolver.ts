import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CatalogService } from '../services/catalog.service';
import { Product } from '../models/product';
import { delay, firstValueFrom, of } from 'rxjs';

export const catalogResolver: ResolveFn<Promise<Product[]>> = async (route, state) => {
  const service = inject(CatalogService); 
  const products = await service.getProducts();
  await firstValueFrom(of("").pipe(delay(2000)));
  return products;
};
