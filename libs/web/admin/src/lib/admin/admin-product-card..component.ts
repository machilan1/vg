import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@vg/oai';

@Component({
  selector: 'vg-admin-product-card',
  template: `
    <a
      class="flex flex-col gap-2 cursor-pointer"
      routerLink="/admin/products/{{ product.productId }}"
    >
      <img [src]="product.image" class="aspect-[4/3] bg-gray-300 rounded-md" />
      <div class="flex flex-col px-2">
        <div>{{ product.name }}</div>
        <div class="text-sm">$ {{ product.latestPrice }}</div>
      </div>
    </a>
  `,
  styles: [``],
  standalone: true,
  imports: [RouterLink],
})
export class AdminProductCardComponent {
  @Input({
    required: true,
  })
  product!: Product;
}
