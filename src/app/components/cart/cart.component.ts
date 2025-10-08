import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { CatalogService } from '../../services/catalog.service';
import { ProductComponent } from '../product/product.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public products:Product[] = []; 
  private _catalog:CatalogService = inject(CatalogService);
  public async ngOnInit(){
    this.products = await this._catalog.getCart();
  }
}
