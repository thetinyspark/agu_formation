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
        users.forEach(
          (user:string, index:number)=>{
            setTimeout( ()=>observer.next(user), index * 1000)
          }
        ); 
        setTimeout( ()=> observer.complete(), users.length * 1000);
      }
    );

    obs1.subscribe(
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
