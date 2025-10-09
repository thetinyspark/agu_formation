import { Component, computed, effect, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {
  combineLatest,
  forkJoin,
  interval,
  map,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'My Game Video Store';
  public price = signal<number>(100);
  public vat = signal<number>(20);
  public total = computed( 
    ()=>{
      return this.price() * (1 + this.vat() / 100);
    }
  );

  public upVAT() {
    this.vat.set(this.vat() + 1);
  }

  public upPrice() {
    this.price.set(this.price() + 10);
  }
}
