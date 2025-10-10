import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { emptyCartGuard } from './guards/empty-cart.guard';
import { catalogResolver } from './resolvers/catalog.resolver';
import { cartResolver } from './resolvers/cart.resolver';
import { LoginComponent } from './components/login/login.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'My Cart', 
    canActivate: [emptyCartGuard], 
    resolve: {
      cart: cartResolver
    }
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: 'My Catalog', 
    resolve: {
      catalog: catalogResolver
    }
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    title: 'My Product'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Me'
  }
];

export default routeConfig;
