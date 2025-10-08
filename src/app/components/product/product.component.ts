import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { NgIf } from '@angular/common';

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

  @Output()
  public onBuy: EventEmitter<Product> = new EventEmitter();

  public addToCart(product:Product):void{
    this.onBuy.emit(product);
  }
}
