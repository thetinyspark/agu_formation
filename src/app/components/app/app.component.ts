import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { interval, Observable, ReplaySubject, Subject } from 'rxjs';

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
    // replaysubject possède un historique de diffusion
    // il rejoue toutes les données précédemment diffusée avant
    // la souscription
    const subj = new ReplaySubject<string>();

    const sub1 = interval(1000).subscribe(
      (index:number)=>{
        subj.next(`News N°${index}`);
      }
    );
    
    setTimeout( ()=>subj.subscribe( console.log ), 3000 );
    setTimeout( ()=>subj.subscribe( (value:string)=>{
      console.log("Cette news a été diffusée : "+value)
    } ), 5000 );

    // on arrête la diffusion au bout de 10s et on complete le flux de subj
    setTimeout( 
      ()=>{
        sub1.unsubscribe();
        subj.complete();
      }, 
      10000
    )
    
  }
}
