import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-display-box',
  templateUrl: './display-box.component.html',
  styleUrls: ['./display-box.component.css']
})
export class DisplayBoxComponent implements OnInit {
  @Input () stock;
  @Input () change;
  
  constructor() { }

  ngOnInit() {
  }
  theActive(){
  if (this.change >= 0) {
    return true
  }
  else {
    return false;
  }
}
}
