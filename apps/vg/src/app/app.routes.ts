import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@vg/shell').then((m) => m.SHELL_ROUTES),
  },
];
