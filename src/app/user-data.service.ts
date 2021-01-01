import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    return this.http.get(url);
    }
  
}
