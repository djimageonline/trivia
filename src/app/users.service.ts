import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor(private http:HttpClient){} 

    getData(numofQuest : any)
    {
      let url = `https://opentdb.com/api.php?amount=${numofQuest}`;
      console.log(url)
      return this.http.get(url);
    }

   }

