import { HttpInterceptorFn } from '@angular/common/http';
import { ACCESS_TOKEN_STORAGE_KEY } from './key.constant';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};

// Token Authorization
// 1. Add interceptor to modify all outgoing requests
// 2. Add {{ token }} in `Authorization` header
// 3. Check docs for `Authorization` header format - `Bearer {{ token }}` or `Jwt {{ token }}`
