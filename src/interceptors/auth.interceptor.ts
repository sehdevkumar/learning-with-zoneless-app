import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 
   const requestWithAuthorization = req.clone({
     headers: req.headers.set('Authorization', `${172}`),
   });

  return next(requestWithAuthorization);
};
