import { Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogPipe } from '../../pipes/catalog.pipe';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, FormsModule, CatalogPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  public products:Product[] = [];
  public currentPlatform:string = "";
  public priceMin:number = 0;
  public priceMax:number = 100;
  public nameFilter:string = "";

  private _catalog:CatalogService = inject(CatalogService);

  public ngOnInit():void{
    this._catalog.getProducts().subscribe(
      (products:Product[])=>{
        this.products = products;
      }
    );
  }

  public getFilters():any{
    return {
      currentPlatform: this.currentPlatform, 
      priceMin: this.priceMin, 
      priceMax: this.priceMax, 
      nameFilter: this.nameFilter
    }
  }

  public getPlatforms():string[]{
    // retourne un tableau contenant toutes les plateformes de tous les produits
    const platforms = this.products.map( (p)=>p.platform );

    // on transforme notre tableau en Set, qui interdit les doublons
    const uniqPlatformsSet = new Set(platforms);

    // on reconstruit un tableau à partir du Set
    const uniqPlatforms = Array.from( uniqPlatformsSet );

    // on ajoute une plateforme vide (pour pouvoir ne sélectionner aucune plateforme)
    uniqPlatforms.unshift("");

    // on retourne le tableau avec les plateformes uniques
    return uniqPlatforms;
  }
}
