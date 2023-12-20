import { Component, inject } from '@angular/core';

import { AdminProductCardComponent } from './admin-product-card..component';
import { AdminStateService } from './admin-state.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'vg-admin-products',
  template: `
    <div class="w-full flex justify-end">
      <button
        class="bg-green-800 text-white rounded-md px-4 py-1"
        routerLink="new/edit"
      >
        新增
      </button>
    </div>
    <div class="w-full grid grid-cols-4 gap-4 pt-4">
      @if (products.isLoading()) {
        <div>loading</div>
      } @else if (products.isError()) {
        <div>error</div>
      } @else {
        @for (product of products.data(); track product.productId) {
          <vg-admin-product-card [product]="product"></vg-admin-product-card>
        } @empty {
          <div>no products</div>
        }
      }
    </div>
  `,
  standalone: true,
  imports: [AdminProductCardComponent, RouterLink],
})
export class AdminProductsComponent {
  #adminStateService = inject(AdminStateService);

  products = this.#adminStateService.getProducts();
}
