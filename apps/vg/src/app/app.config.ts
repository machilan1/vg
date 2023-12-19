import { ApiConfiguration } from './../../../../libs/shared/src/lib/api-configuration';
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
import { provideHttpClient, withFetch } from '@angular/common/http';
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
    provideAngularQuery(new QueryClient()),
    // TODO: set codegen config - api base url (1. mock server / 2. development server)
    {
      provide: ApiConfiguration,
      useValue: {
        rootUrl: 'http://127.0.0.1:4010',
      },
    },
  ],
};
