import { inject, Injectable } from '@angular/core';
import {LogMethodCall, RegisterClass, TestMethod, getRegisteredClasses, testAllMethods } from '../decorators/RegisterClass';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({providedIn: 'root'})
@RegisterClass({name:"DummyService", desc:"C'est un service inutile"})
export class DummyService {


  public client:HttpClient = inject(HttpClient);

  @LogMethodCall
  show() { 

    // console.log( getRegisteredClasses() );
    // testAllMethods();

    // ajout de headers http 
    const headers = new HttpHeaders({
      'Authorization': '', 
    }); 

    // ajout de paramètres
    const params = new HttpParams();
    params.set('userId', 10);
    params.set('pageNum', 2);
    // http://mondomain.com/products?userId=10&pageNum=2


    this.client.get(environment.productsURI, {headers, params})
  }

  addition(a:number, b:number):number{
    return a+b;
  }

  @TestMethod
  testAddition():boolean{
    return this.addition(10,5) == 15;
  }

  
}
