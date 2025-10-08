import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';
import { CatalogServerService } from '../services/catalog-server.service';
import { Product } from '../models/product';

export const catalogInterceptor: HttpInterceptorFn = (req, next) => {

  if( req.method == "GET"){
    if( req.url == environment.productsURI){
      const service = inject(CatalogServerService);
      const products = service.getProducts();
      return of( new HttpResponse({status:200, body: products }));
    }
  }

  if( req.method == "POST"){
    if( req.url == environment.buyURI){
      const service = inject(CatalogServerService);
      const body:any = req.body as any;
      const product = body.product as Product;
      service.addToCart( product );
      return of( new HttpResponse({status:200, body: ""}));
    }
  }

  return next(req);
};
