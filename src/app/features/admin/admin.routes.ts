import { Route } from "@angular/router";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { AdminComponent } from "./admin.component";

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: HomeAdminComponent
  },
]
