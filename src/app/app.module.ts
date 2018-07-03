import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpModule} from '@angular/http';

import { CanActivateRouteGuard } from './can-activate-route.guard';
import { MyServiceService } from './my-service.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MyServiceService, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
