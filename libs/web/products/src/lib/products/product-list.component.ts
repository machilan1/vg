import { Component } from '@angular/core';

import { ProductCardComponent } from './product-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'vg-products',
  standalone: true,
  imports: [ProductCardComponent, RouterLink, RouterLinkActive],
  template: `
    <div class="w-full">
      <div class="grid grid-cols-[1fr_5fr] gap-12">
        <div class="border-r border-green-900 text-center">
          <h4 class="font-semibold">分類</h4>
          <div class="pt-4 flex flex-col">
            @for (category of categories; track category.name) {
              <a routerLink="/" routerLinkActive="text-green-800">{{
                category.name
              }}</a>
            }
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
          @for (product of products; track product.name) {
            <vg-product-card [product]="product"></vg-product-card>
          }
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class ProductsComponent {
  categories = [
    { name: '葉菜類' },
    { name: '根莖類' },
    { name: '五穀雜糧類' },
    { name: '米麵類' },
    { name: '水果' },
    { name: '豆類' },
    { name: '進口產品' },
    { name: '其他產品' },
  ];

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
