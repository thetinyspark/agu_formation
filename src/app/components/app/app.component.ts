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
  title = 'MyApp';

  constructor(){

    let age:number = 39;
    let name:string = "Nicolas";
    let title = `
    Bonjour 
    je 
    m'appelle 
    ${name} 
    et 
    j'ai ${age} ans
    `;

    this.title = title.split(`\n`).join("<br />");

    class Test{
      private _myfunc:Function;
      public name:string = "Test";
      constructor( func:Function){
        this._myfunc = func;
      }

      execute(){
        this._myfunc();
      }
    }


    // const myFunc1 = function (this: any){
    //   console.log(this);
    // };

    // const myFunc2 = ()=>{
    //   console.log(this);
    // };


    this.introduceMySelf = this.introduceMySelf.bind(this);

    const test1 = new Test(this.introduceMySelf);
    const test2 = new Test(this.introduceMySelf);

    test1.execute();
    test2.execute();
  }

  introduceMySelf(age:number = 10, name:string = "Toto"){
    // this.title = `Bonjour je m'appelle ${name} et j'ai ${age} ans`;
    console.log(this.title);
  };
}
