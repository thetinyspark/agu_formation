import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductComponent } from '../product/product.component';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public products:Product[] = []; 
  private _route:ActivatedRoute = inject(ActivatedRoute);
  public async ngOnInit(){
    const body = this._route.snapshot.data as any;
    this.products = body.cart as Product[];
  }
}
