import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';

fdescribe('AppComponent', () => {
  beforeEach(async () => {

    // on ajoute une fause ActivatedRoute pour que le composant fonctionne
    // (parce que on a le routerLink qui est importé ainsi que le navbarcomponent)
    const route = {};
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {provide:ActivatedRoute, useValue: route}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'My Game Video Store' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('My Game Video Store');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // déclenche un rafraîchissement du composant 
    // ainsi que son rendu côté HTML
    fixture.detectChanges();

    // on récupère l'objet qui permet de manipuler le DOM au sein du composant
    const compiled = fixture.nativeElement as HTMLElement;

    // enfin, on va chercher l'élement h1 et le texte qu'il contient
    // on le compare à la valeur voulue
    expect(compiled.querySelector('h1')?.textContent).toContain('My Game Video Store');
  });
});
