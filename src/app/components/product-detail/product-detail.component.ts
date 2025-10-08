import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _catalog:CatalogService = inject(CatalogService);

  public ngOnInit():void{

    // l'objet activatedRoute permet d'obtenir des infos 
    // sur la route en cours
    this._activatedRoute.paramMap.subscribe( 

      async (map:ParamMap)=>{
        // une fois que l'on a obtenu l'objet ParamMap promis
        // on cherche à en extraite le paramètre id contenu dans la route
       const id:number = parseInt(map.get("id") || "-1");

       // puis on récupère le produit correspondant
       const product = await this._catalog.getProductById(id);
       console.log(product);
      }

    )
  }
}
