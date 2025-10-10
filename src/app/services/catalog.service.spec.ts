import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PRODUCTS_MOCK } from '../models/mocks/product-mocks';

fdescribe('CatalogService', () => {
  let service: CatalogService;
  // let client :HttpClient;

  // créer un faux HttpClient de toutes pièces 
  // est aussi une bonne alternative à l'utilisation des spies. 

  class FakeHttpClient{
    get<T>(url:string):Observable<any>{
      return of(PRODUCTS_MOCK);
    }
  }
  const fakeHttpClient = new FakeHttpClient();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // ici on décrit l'objet qui devra être retourné par l'injecteur de dépendances 
        // lorsqu'on lui demande un objet de type HTTPClient. 
        // cela permet de maîtriser de bout en bout l'accès aux données et de ne pas dépendre 
        // de l'environnement externe (appel API, BDD, etc ...)
        // En outre, cela permet de bien isoler ce que l'on teste du reste.
        {provide: HttpClient, useValue: fakeHttpClient }
      ]
    });
    service = TestBed.inject(CatalogService);
    // client = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all the products', async () => {

    // given
    expect(service).toBeTruthy();

    // créer un espion permet d'intercepter l'appel d'une méthode sur un object cible
    // et de retourner une valeur à la place.
    // const spy = spyOn(client, "get" ).and.returnValue( of(PRODUCTS_MOCK));

    // when 
    const products = await service.getProducts();

    // then
    expect(products).toEqual(PRODUCTS_MOCK);
  });
});
