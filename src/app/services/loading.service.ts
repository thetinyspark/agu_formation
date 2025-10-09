import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading = signal<boolean>(false);
  public percentage = signal<number>(0);
  constructor() { }
}
