import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  public products:Product[] = [
    {
        "id": 1, 
        "name": "Call Of Duty", 
        "img": "./assets/img/cod.jpg", 
        "price": 79.99
    }, 
    {
        "id": 2, 
        "name": "Tetris", 
        "img": "./assets/img/tetris.jpg", 
        "price": 24.99
    }, 
    {
        "id": 3, 
        "name": "Halo", 
        "img": "./assets/img/halo.jpg", 
        "price": 59.99
    }, 
    {
        "id": 4, 
        "name": "Pacman", 
        "img": "./assets/img/pacman.webp", 
        "price": 14.99
    }
  ]
}
