import { Route } from '@angular/router';
import { SellerComponent } from './seller.component';
import { SellerAccountComponent } from './seller-account.component';
import { SellerProductsComponent } from './seller-products.component';
import { SellerProductEditComponent } from './seller-product-edit.component';
import { SellerProductComponent } from './seller-product.component';

export const SELLER_ROUTES: Route[] = [
  {
    path: '',
    component: SellerComponent,
    children: [
      {
        path: '',
        component: SellerAccountComponent,
      },
      {
        path: 'products',
        component: SellerProductsComponent,
      },
      {
        path: 'product',
        component: SellerProductComponent,
      },
      {
        path: 'product/edit',
        component: SellerProductEditComponent,
      },
    ],
  },
];
