import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import { PRODUCTS_MOCK } from '../../models/mocks/product-mocks';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { CatalogService } from '../../services/catalog.service';

fdescribe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  const catalogService = { buy: function(product:Product){}};

  const route = {
    snapshot: {
      data: { catalog: PRODUCTS_MOCK }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogComponent], 
      providers: [
        {provide: ActivatedRoute, useValue: route},
        {provide: CatalogService, useValue: catalogService},
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CatalogComponent);
    // déclenche un rafraîchissement du composant 
    // ainsi que son rendu côté HTML
    fixture.detectChanges();

    // on récupère l'objet qui permet de manipuler le DOM au sein du composant
    const compiled = fixture.nativeElement as HTMLElement;

    // enfin, on va chercher tous les produits rendus dans le catalog
    // et on s'attend à ce qu'il y en ait autant que dans le mock
    const products = Array.from( compiled.querySelectorAll('.product') );
    expect(products.length).toEqual(PRODUCTS_MOCK.length);
  });
});
