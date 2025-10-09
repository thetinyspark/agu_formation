import { Injectable, signal } from '@angular/core';
import { interval, map, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading = signal<boolean>(false);
  public percentage = signal<number>(0);

  public startLoading():void{
    this.percentage.set(0);
    this.isLoading.set(true);
  }

  public setProgress(percentage:number):void{
    const target:number = percentage;
    const start:number = this.percentage();
    const numSteps:number = target - start;
    interval(5).pipe( take(numSteps )).pipe(
      map(
        (value:number)=>{
          this.percentage.set( this.percentage()+1);
          if(this.percentage() >= 100)
            this.isLoading.set(false);
        }
      )
    ).subscribe(()=>{});
  }

  constructor() { }
}
