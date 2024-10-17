import { Routes } from '@angular/router';
import { CouponsLoginComponent } from './core/auth/coupons-login/coupons-login.component';

export const routes: Routes = [
  {
    path: '',
    component: CouponsLoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
