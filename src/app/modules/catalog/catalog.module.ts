import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from '../../components/catalog/catalog.component';

// vieille façon de faire, stocker tous les composants 
// directives, pipes etc ... dans un module dédié qui les regroupe 
// tous et importer tout cela dans le module principal

@NgModule({
  declarations: [CatalogComponent],
  exports: [CatalogComponent],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
