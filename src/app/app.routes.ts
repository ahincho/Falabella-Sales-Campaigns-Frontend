import { Routes } from '@angular/router';
import { CouponsLoginComponent } from './core/auth/coupons-login/coupons-login.component';
import { AdminLoginComponent } from './core/auth/admin-login/admin-login.component';

export const routes: Routes = [
  {
    path: '',
    component: CouponsLoginComponent
  },
  {
    path: 'login',
    component: AdminLoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
