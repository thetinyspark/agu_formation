import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { delay, interval, map, Observable, of } from 'rxjs';

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
    // of permet de créer un observable à partir de données synchrones
    // pipe permet de rediriger chacune des valeurs diffusée par l'observable
    // vers un opérateur (ici map). Cela résulte en un nouvel observable.
    const obs1 = of(100,200,300,400).pipe(
      map(
        (value:number, index:number)=>{
          const tva = 0.2; // 20% TVA
          return value * ( 1+tva );
        }
      )
    ).pipe( 
      // delay ralentit la diffusion des données de x ms
      delay(1000)
    );

    const sub = obs1.subscribe(
      {
        next: (data:number)=>{
          console.log(data);
        }, 
        complete: ()=>{
          console.log("complete");
        }, 
        error: (reason:any)=>{
          console.log("reason", reason);
        }
      }
    );

    // interval permet de créer un observable qui diffuse quelque chose
    // toutes les x ms (par défaut, c'est un entier qui s'incrémente)
    const obs2 = interval(1000);
    const sub2 = obs2.subscribe(
      (index:number)=>{
        const nums = [100,200,300,400];
        console.log(nums[index%4]);
      }
    ); 

    sub2.unsubscribe();


  }
}
