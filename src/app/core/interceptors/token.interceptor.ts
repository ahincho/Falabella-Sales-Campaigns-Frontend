import { HttpInterceptorFn } from "@angular/common/http";
import { JwtService } from "../auth/services/jwt.service";
import { inject } from "@angular/core";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const token = inject(JwtService).getToken();
    if (token) {
        req = req.clone({
            setHeaders: {
                ...token ? { Authorization: `Bearer ${token}` } : {}
            }
        });
    }
    return next(req);
}