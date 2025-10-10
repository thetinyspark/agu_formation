import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LoadingService } from '../../services/loading.service';
import { DummyService } from '../../services/dummy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavBarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'My Game Video Store';
  public price = signal<number>(100);
  public vat = signal<number>(20);
  public loadingService = inject(LoadingService);
  public isLoading = this.loadingService.isLoading;
  public percentage = this.loadingService.percentage;

  public dummy = inject(DummyService);

  ngOnInit(){
  }

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
