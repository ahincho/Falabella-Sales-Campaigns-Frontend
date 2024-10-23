import { Routes } from '@angular/router';
import { CouponsLoginComponent } from './core/auth/coupons-login/coupons-login.component';
import { AdminComponent } from './features/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: CouponsLoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./features/user/user.routes').then(m => m.USER_ROUTES),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
  }
];
