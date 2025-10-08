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

  constructor(){

    // la méthode fetch native de javascript permet d'aller chercher 
    // le contenu présent à l'adresse passée en paramètre. 
    // Cette  méthode renvoit une promesse, çàd, un objet standardisé
    // permettant de gérer la disponibilité asynchrone du contenu. 
    // lorsque le contenu sera dispo la fonction passée en paramètre
    // s'éxécutera.
    fetch("./assets/products.json").then(
      (response:Response)=>{
        // une fois que l'on a obtenu une réponse du serveur
        // on essaie d'interpréter le contenu de la réponse sous 
        // forme de texte.
        response.text().then( 
          (value:string)=>{
            // une fois le texte obtenu on l'affiche dans la console
            // ici, le texte contient le contenu du fichier products.json
            console.log(value);
          }
        )
      }
    ).catch( 
      (reason:any)=>{
        // au cas où cela se passerait mal, on affiche la raison de l'échec
        console.log(reason);
      }
    );

    // promesse personnalisée qui permet de renvoyer la valeur "10" au bout de 5s
    const p1 = new Promise( 
      (onResolve, onReject)=>{

        setTimeout( 
          ()=>{
              onResolve(10);
          }, 
          5000
        )
       
      }
    ); 

    p1.then( (value )=>{
      console.log(value);
    });
  }

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
