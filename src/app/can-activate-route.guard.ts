import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MyServiceService } from './my-service.service'


@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanActivate {
  constructor (private auth:MyServiceService) {}
  canActivate():boolean{
      return this.auth.isUserAuthenticated();
    }
}
