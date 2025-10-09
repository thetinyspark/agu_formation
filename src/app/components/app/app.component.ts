import { Component, effect, Signal, signal } from '@angular/core';
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
  public s1 = signal<boolean>(true);
  public s2 = signal<string>("");

  constructor(){


    effect(
      ()=>{
        const isFinished = this.s1();
        let prefix = "";
        if( !isFinished ){
          prefix = "Loading: ";
        }
        this.title = prefix + this.s2();
      }
    )

    this.s2.set("");

  }

  public onClick(){
    // on déclenche notre requête
    this.s1.set(false);
    this.s2.set("Produits")

    setTimeout(
      ()=>{
        // on a reçu la requête
        this.s1.set(true);
        this.s2.set("done");
      }, 
      5000
    );
  }
}
