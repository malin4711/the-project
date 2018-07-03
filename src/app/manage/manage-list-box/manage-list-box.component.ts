import { Component, OnInit, Input } from '@angular/core';
import { MyServiceService } from '../../my-service.service';
@Component({
  selector: 'app-manage-list-box',
  templateUrl: './manage-list-box.component.html',
  styleUrls: ['./manage-list-box.component.css']
})
export class ManageListBoxComponent implements OnInit {
  @Input () company;
  @Input () i;
  constructor(private answer:MyServiceService) { }

  ngOnInit() {
  }
  deleteItem(){
    //console.log(this.i);
    this.answer.spliceArr(this.i);
  }
}
