import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ProductComponent } from '@vg/products';
export const SHELL_ROUTES: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@vg/home').then((m) => m.HomeComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('@vg/auth').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@vg/auth').then((m) => m.RegisterComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('@vg/products').then((m) => m.ProductsComponent),
      },
      {
        path: 'products/:productId',
        loadComponent: () =>
          import('@vg/products').then((m) => m.ProductComponent),
      },
      {
        path: 'seller',
        loadChildren: () => import('@vg/seller').then((m) => m.SELLER_ROUTES),
      },
      {
        path: 'admin',
        loadChildren: () => import('@vg/admin').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pageNotFound.component').then(
            (m) => m.PageNotFoundComponent,
          ),
      },
    ],
  },
];
