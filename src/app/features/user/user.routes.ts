import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NoCouponComponent } from "./no-coupon/no-coupon.component";

export const USER_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'noCoupons',
    component: NoCouponComponent
  }
];
