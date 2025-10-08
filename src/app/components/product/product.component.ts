import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product';
import { NgIf } from '@angular/common';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  public currentProduct:Product|null = null;

  @Input()
  public detailed:boolean = false;

  private _catalog:CatalogService = inject(CatalogService);

  public addToCart(product:Product):void{
    this._catalog.buy(product);
  }
}
