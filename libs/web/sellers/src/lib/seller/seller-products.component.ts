import { Component } from '@angular/core';

import { SellerProductCardComponent } from './seller-product-card..component';

@Component({
  selector: 'vg-seller-products',
  template: `
    <div class="w-full grid grid-cols-4 gap-4">
      @for(product of products; track product.name) {
      <vg-seller-product-card [product]="product"></vg-seller-product-card>
      }
    </div>
  `,
  standalone: true,
  imports: [SellerProductCardComponent],
})
export class SellerProductsComponent {
  products = [
    {
      name: 'Product 1',
      price: 100,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Product 2',
      price: 50,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Product 3',
      price: 32,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Product 4',
      price: 67,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Product 5',
      price: 55,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Product 6',
      price: 21,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Product 7',
      price: 99,
      image: 'https://picsum.photos/200',
    },
    {
      name: 'Product 82',
      price: 48,
      image: 'https://picsum.photos/200',
    },
  ];
}
