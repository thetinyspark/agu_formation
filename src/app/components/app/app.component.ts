import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Observable } from 'rxjs';

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
    const obs1 = new Observable<string>( 
      (observer)=>{
        const users = ["Katia", "Sofian", "Quentin", "Lucas"]; 
        var index:number = 0;

        const interval = setInterval( 
          ()=>{
            if( index >= users.length)
              observer.complete();

            observer.next(users[index++]); 
          }, 
          100
        );

        // s'éxécute quand on se désinscrit de l'observable
        // ici, n'oubliez pas de nettoyer toutes les ressources 
        // qui prennent de la mémoire et qui ne sont pas supposées
        // survivre à un unsubcribe
        return ()=>{
          clearInterval(interval);
          observer.complete();
        }
        
      }
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

    setTimeout(
      ()=>{
        sub.unsubscribe();
      }, 
      600
    );
  }
}
