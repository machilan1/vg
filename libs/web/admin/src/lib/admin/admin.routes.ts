import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminSellersComponent } from './admin-sellers.component';
import { AdminProductsComponent } from './admin-products.component';
import { AdminProductComponent } from './admin-product.component';
import { AdminProductEditComponent } from './admin-product-edit.component';
import { AdminSellerEditComponent } from './admin-seller-edit.component';

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminSellersComponent,
      },
      {
        path: 'seller/:userId',
        component: AdminSellerEditComponent,
      },
      {
        path: 'products',
        component: AdminProductsComponent,
      },
      {
        path: 'products/:productId',
        component: AdminProductComponent,
      },
      {
        path: 'products/:productId/edit',
        component: AdminProductEditComponent,
      },
    ],
  },
];
