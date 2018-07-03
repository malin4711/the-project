import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageListComponent} from './manage-list/manage-list.component';
import { CanActivateRouteGuard } from '../can-activate-route.guard';

const routes: Routes = [
  {
    path: '',
    component: ManageListComponent,
    canActivate:[CanActivateRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
