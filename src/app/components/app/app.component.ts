import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { combineLatest, forkJoin, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title = 'My Game Video Store';

  constructor(){

    const obs1 = new Subject();
    const obs2 = new Subject();
    const obs3 = new Subject();
    // forkjoin attend que les flux soient complétés pour diffuser
    // combineLatest lui, diffuse à chaque fois, les dernières valeurs diffusées
    // dans chaque canal séparé. 

    // ATTENTION: les deux demandent que chacun des canaux ait diffusé au moins UNE donnée
    combineLatest({
      price: obs1, 
      vat: obs2, 
      discount: obs3
    }).subscribe( 
      (obj:any)=>{
        const price = ( (obj.price - (obj.price * obj.discount ) ) * (1 + obj.vat) ); 
        console.log(price);
      }
    );


    // premier jeu de données diffusé
    obs1.next(100);
    obs2.next(0.05);
    obs3.next(0.2);


    // maintenanto on peut faire varier indépendamment chacune des données, cela 
    // aura pour effet de redéclencher le subscribe

    obs1.next(200);
    obs2.next(0.1);
    
  }
}
