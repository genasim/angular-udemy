import { bootstrapApplication } from '@angular/platform-browser';

import {
  HttpInterceptorFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { tap } from 'rxjs';

const loggingInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next
) => {
  console.log('[Ongoing request]', request);

  return next(request).pipe(
    tap({
      next: (response) => {
        console.log('[Response]', response);
      },
    })
  );
};

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));
