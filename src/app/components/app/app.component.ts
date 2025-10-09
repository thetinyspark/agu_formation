import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { combineLatest, forkJoin, interval, map, Observable, of, ReplaySubject, Subject } from 'rxjs';

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

    const obs1 = new Subject<any[]>();
    const obs2 = new Subject<any[]>();

    combineLatest({
      users: obs1, 
      products: obs2,
    }).pipe(
      map( 
        (obj:any)=>{
          const products = obj.products; 
          const users = obj.users;
          users.forEach(
            (user:any)=>{
              user.products = products.filter(
                (product:any)=>{
                  return ( product.userId === user.id);
                }
              )
            }
          );
          return users;
        }
      ) 
    ).subscribe(console.log);


    const users = [
      {id: 1, name: "Katia"}, 
      {id: 2, name:"Quentin"}
    ];

    const products = [
      {id: 1, name: "Tetris", userId: 1}
    ];

    // premier jeu de données diffusé
    obs1.next(users);
    obs2.next(products);

    products.push(
      {id:2, name: "Halo", userId: 2}
    ); 

    setTimeout( ()=>obs2.next( products ), 5000 );
  }
}
