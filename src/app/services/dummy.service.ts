import { Injectable } from '@angular/core';
import {LogMethodCall, RegisterClass, TestMethod, getRegisteredClasses, testAllMethods } from '../decorators/RegisterClass';


@Injectable({providedIn: 'root'})
@RegisterClass({name:"DummyService", desc:"C'est un service inutile"})
export class DummyService {

  @LogMethodCall
  show( ...params:any[]) { 

    console.log( getRegisteredClasses() );
    testAllMethods();
  }

  addition(a:number, b:number):number{
    return a+b;
  }

  @TestMethod
  testAddition():boolean{
    return this.addition(10,5) == 15;
  }

  
}
