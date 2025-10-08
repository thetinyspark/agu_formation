import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';
import { CatalogServerService } from '../services/catalog-server.service';
import { Product } from '../models/product';

export const catalogInterceptor: HttpInterceptorFn = (req, next) => {

  const service = inject(CatalogServerService);

  if( req.method == "GET"){
    if( req.url == environment.productsURI){
      const products = service.getProducts();
      return of( new HttpResponse({status:200, body: products }));
    }

    if( req.url.includes( environment.productURI.replace(":id", "") )){
      const urlBase = environment.productURI.replace(":id", "");
      const id = parseInt(req.url.replace(urlBase, ""));
      const product = service.getProductById(id);
      return of( new HttpResponse({status:200, body: product }));
    }

    if( req.url == environment.cartURI){
      const products = service.getCart();
      return of( new HttpResponse({status:200, body: products }));
    }
  }
  

  if( req.method == "POST"){
    if( req.url == environment.buyURI){
      const body:any = req.body as any;
      const product = body.product as Product;
      service.addToCart( product );
      return of( new HttpResponse({status:200, body: ""}));
    }
  }

  return next(req);
};
