import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../my-service.service';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(private answer:MyServiceService) { }
  change
  displayObj;
  ngOnInit() {
    this.answer.stockSearch1();
  }
  ngDoCheck(){
    this.displayObj = this.answer.stockObj;
    console.log(this.displayObj);
    console.log(this.change);
  }

}
