import { Component } from '@angular/core';

import { AdminProductCardComponent } from './admin-product-card..component';

@Component({
  selector: 'vg-admin-products',
  template: `
    <div class="w-full grid grid-cols-4 gap-4">
      @for(product of products; track product.name) {
      <vg-admin-product-card [product]="product"></vg-admin-product-card>
      }
    </div>
  `,
  standalone: true,
  imports: [AdminProductCardComponent],
})
export class AdminProductsComponent {
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
