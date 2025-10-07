import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public title = 'MyApp';

  constructor(){
    let age:number = 40;
    let name:string = "Nicolas";
    this.title = `Bonjour je m'appelle ${name} et j'ai ${age} ans`;
  }
}
