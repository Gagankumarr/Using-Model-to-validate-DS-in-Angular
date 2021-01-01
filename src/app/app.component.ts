import { Component } from '@angular/core';
import {UserDataService} from './user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  data=[];
  constructor( private user:UserDataService){
    this.user.getData().subscribe(data=>{
      console.warn(data)
      this.data=data
    })
  }
}
