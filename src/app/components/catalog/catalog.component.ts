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
        "price": 79.99 ,
        "platform": "PS5"
    }, 
    {
        "id": 2, 
        "name": "Tetris", 
        "img": "./assets/img/tetris.jpg", 
        "price": 24.99, 
        "platform": "Steam"
    }, 
    {
        "id": 3, 
        "name": "Halo", 
        "img": "./assets/img/halo.jpg", 
        "price": 59.99, 
        "platform": "XBOX"
    }, 
    {
        "id": 4, 
        "name": "Pacman", 
        "img": "./assets/img/pacman.webp", 
        "price": 14.99, 
        "platform": "PC"
    },
    {
        "id": 5, 
        "name": "Pacman PS5", 
        "img": "./assets/img/pacman.webp", 
        "price": 17.99, 
        "platform": "PS5"
    }
  ]; 

  public getPlatforms():string[]{
    // retourne un tableau contenant toutes les plateformes de tous les produits
    const platforms = this.products.map( (p)=>p.platform );

    // on transforme notre tableau en Set, qui interdit les doublons
    const uniqPlatformsSet = new Set(platforms);

    // on reconstruit un tableau à partir du Set
    const uniqPlatforms = Array.from( uniqPlatformsSet );

    // on retourne le tableau avec les plateformes uniques
    return uniqPlatforms;
  }
}
