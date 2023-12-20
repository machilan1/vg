import { Component, inject } from '@angular/core';

import { SellerProductCardComponent } from './seller-product-card..component';
import { SellerStateService } from './seller-state.service';

@Component({
  selector: 'vg-seller-products',
  template: `
    @if (products.isLoading()) {
      <div>Loading...</div>
    } @else if (products.isError()) {
      <div>Error: {{ products.error }}</div>
    } @else {
      <div class="w-full grid grid-cols-4 gap-4">
        @for (product of products.data(); track product.name) {
          <vg-seller-product-card [product]="product"></vg-seller-product-card>
        } @empty {
          <div>No products</div>
        }
      </div>
    }
  `,
  standalone: true,
  imports: [SellerProductCardComponent],
})
export class SellerProductsComponent {
  #sellerStateService = inject(SellerStateService);

  products = this.#sellerStateService.getProducts(1);
}
