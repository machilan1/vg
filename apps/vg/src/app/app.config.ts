import { ApiConfiguration } from '@vg/oai';
import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {
  HttpErrorResponse,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { provideAngularQuery } from '@tanstack/angular-query-experimental';
import { QueryClient } from '@tanstack/angular-query-experimental';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideHttpClient(withFetch()),

    provideAngularQuery(
      new QueryClient({
        defaultOptions: {
          queries: {
            retry(failureCount, error) {
              if (error instanceof HttpErrorResponse) {
                if (error.status >= 400 && error.status < 500) {
                  return false;
                }
              }
              return failureCount < 3;
            },
          },
        },
      }),
    ),

    // TODO: set codegen config - api base url (1. mock server / 2. development server)
    {
      provide: ApiConfiguration,
      useValue: {
        rootUrl: 'http://127.0.0.1:4010',
      },
    },
  ],
};
