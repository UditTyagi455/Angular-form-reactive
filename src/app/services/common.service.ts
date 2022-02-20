import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  value:any =[1];
  constructor() { }
  setData(value:number){
    this.value.push(value);
  }
}
