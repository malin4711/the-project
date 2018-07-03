import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../my-service.service';
@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css']
})
export class ManageListComponent implements OnInit {

  constructor(private answer:MyServiceService) { }
  displayComp;
  ngOnInit() {
  }
  ngDoCheck(){
    this.displayComp = this.answer.stockObj
  }
}
