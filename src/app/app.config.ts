import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserService } from './core/auth/services/user.service';
import { JwtService } from './core/auth/services/jwt.service';
import { EMPTY } from 'rxjs';

export function initAuth(jwtService: JwtService, authService: UserService) {
  return () => { jwtService.getToken() ? authService.getCurrentUser() : EMPTY };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideHttpClient(
    //   withInterceptors([tokenInterceptor, apiInterceptor])
    // ),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initAuth,
    //   deps: [JwtService, UserService],
    //   multi: true
    // }
  ]
};
