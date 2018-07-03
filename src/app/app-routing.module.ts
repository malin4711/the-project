import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: 'display',
  loadChildren: './display/display.module#DisplayModule'
},
{
  path: 'manage',
  loadChildren: './manage/manage.module#ManageModule'
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


