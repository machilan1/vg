import { Component, inject } from '@angular/core';

import { AdminProductCardComponent } from './admin-product-card..component';
import { AdminStateService } from './admin-state.service';

@Component({
  selector: 'vg-admin-products',
  template: `
    <div class="w-full grid grid-cols-4 gap-4">
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
  imports: [AdminProductCardComponent],
})
export class AdminProductsComponent {
  #adminStateService = inject(AdminStateService);

  products = this.#adminStateService.getProducts();
}
