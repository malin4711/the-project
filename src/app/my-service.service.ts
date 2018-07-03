import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:Http) { }

  stockObj = ["malin"];
  count = 0
  stockSearch1(){
    if (this.count == 0){
    this.http.get('https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=aapl,goog,fb,vii,isns')
    .subscribe((received:Response) => {
      this.stockObj = received.json();
      
    })
    this.count ++;
    }
  } 
  spliceArr(i){
    console.log(i);
    this.stockObj.splice(i, 1);
  }

  isUserAuthenticated(){
    var name = prompt ("what is your password? (hint:1)");
    if (name == "1"){
      return true;
    }
    else {
      alert("wrong password")
    }
  }

}