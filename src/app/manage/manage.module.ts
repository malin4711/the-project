import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageListComponent } from './manage-list/manage-list.component';
import { ManageListBoxComponent } from './manage-list-box/manage-list-box.component';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  declarations: [ManageListComponent, ManageListBoxComponent]
})
export class ManageModule { }
