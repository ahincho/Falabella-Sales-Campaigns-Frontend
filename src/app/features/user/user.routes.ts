import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const USER_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'noCoupons',
  //   component: NoCouponsComponent
  // }
];
