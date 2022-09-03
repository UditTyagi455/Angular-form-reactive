import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  value:any =[1];
  url ="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get(this.url);
  }

  postApiData(data:any){
   return this.http.post(this.url,data);
  }

  deleteApiData(id:any){
    return this.http.delete(this.url+`/${id}`);
  }

}
