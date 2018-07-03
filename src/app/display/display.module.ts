import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { StockListComponent } from './stock-list/stock-list.component';
import { DisplayBoxComponent } from './display-box/display-box.component';


@NgModule({
  imports: [
    CommonModule,
    DisplayRoutingModule
  ],
  declarations: [StockListComponent, DisplayBoxComponent]
})
export class DisplayModule { }
