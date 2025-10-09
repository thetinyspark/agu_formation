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
    const obs1 = new Observable<number>( 
      (observer)=>{
        observer.next(10);
         setTimeout( 
          ()=>{
            observer.next(100);
          }, 
          1000
        )

        // complete le flux de données, impossible de pousser
        // d'avantage de données à l'intérieur


        // observer.error("404 not found");

        setTimeout( 
          ()=>{
            observer.complete();
          }, 
          5000
        )
      }
    );

    obs1.subscribe(
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
  }
}
