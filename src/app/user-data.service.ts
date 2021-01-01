import { Injectable } from '@angular/core';

interface dataType1{
  name:string,
  id:number,
  Indian:boolean,
}
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData(){
     const data:dataType1={
      name:'bagga',
      id:1010,
      Indian:true,
     }
    
  }
  
}
