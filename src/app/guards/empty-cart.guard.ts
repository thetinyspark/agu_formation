import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CatalogService } from '../services/catalog.service';

export const emptyCartGuard: CanActivateFn = async (route, state) => {

  const catalog = inject(CatalogService); 
  const cart = await catalog.getCart();

  return cart.length > 0;
};
