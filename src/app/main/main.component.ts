import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  numOfQuestions: number = 0;

   handleValue(f: NgForm) {
    console.log(f.value.number);
    this.numOfQuestions = Number(f.value.number)
    console.log("Number",this.numOfQuestions);
    // You can perform additional logic here

  }

  constructor(private user: UsersService){
    this.user.getData().subscribe(data => {
      console.warn(data)
    })
  }
}
