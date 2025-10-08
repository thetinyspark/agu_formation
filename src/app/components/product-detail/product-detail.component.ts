import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../models/product';
import { firstValueFrom } from 'rxjs';
import { NgIf } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private _catalog:CatalogService = inject(CatalogService);
  public product:Product|null = null;

  public async ngOnInit(){

    // l'objet activatedRoute permet d'obtenir des infos sur la route en cours
    const map:ParamMap =  await firstValueFrom( this._activatedRoute.paramMap );

    // une fois que l'on a obtenu l'objet ParamMap promis
    // on cherche à en extraite le paramètre id contenu dans la route
    const id:number = parseInt(map.get("id") || "-1");

    // puis on récupère le produit correspondant
    this.product = await this._catalog.getProductById(id);
       
      
  }
}
