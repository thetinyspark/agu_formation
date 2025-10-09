import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { map, Observable, of } from 'rxjs';

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
    const obs1 = of("Katia", "Sofian", "Quentin", "Lucas").pipe(
      map(
        (value:string, index:number)=>{
          return `Participant(e) N° ${index+1} : ${value}`;
        }
      )
    );

    const sub = obs1.subscribe(
      {
        next: (data:string)=>{
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
  }
}
