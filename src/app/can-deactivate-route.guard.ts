import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable()
export class CanActivateRouteGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(component1: DashboardComponent): boolean {
    if (component1.unsavedChanges) {
      return confirm('Are you sure?');
    }
    return true;
  }
}

