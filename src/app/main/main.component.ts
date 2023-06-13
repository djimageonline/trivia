import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  numOfQuestions: any;

  constructor(private user: UsersService){}

   handleValue(f: NgForm) {
    this.numOfQuestions = Number(f.value.number)
    console.log("Number",this.numOfQuestions);
    
    this.user.getData(this.numOfQuestions).subscribe(data => {
      console.warn(data)
    })   
  }
}
