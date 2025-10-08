import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'My Cart'
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: 'My Catalog'
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    title: 'My Product'
  }
];

export default routeConfig;
