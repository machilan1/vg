import { Component, Input, inject, signal } from '@angular/core';

import { ProductCardComponent } from './product-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductStateService } from './product-state.service';

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
            @if (categories.isLoading()) {
              <div>loading</div>
            } @else if (categories.isError()) {
              <div>error</div>
            } @else {
              @for (category of categories.data(); track category.categoryId) {
                <a
                  routerLink="/products"
                  [queryParams]="{ categoryId: category.categoryId }"
                  routerLinkActive="text-green-800"
                  >{{ category.name }}</a
                >
              } @empty {
                <div>empty</div>
              }
            }
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
          @if (products.isLoading()) {
            loading
          } @else if (products.isError()) {
            <div>error</div>
          } @else {
            @for (product of products.data(); track product.productId) {
              <vg-product-card [product]="product"></vg-product-card>
            } @empty {
              <div>empty</div>
            }
          }
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class ProductsComponent {
  #productStateService = inject(ProductStateService);

  categoryIdSignal = signal<string | undefined>(undefined);
  @Input()
  set categoryId(categoryId: string | undefined) {
    this.categoryIdSignal.set(categoryId);
  }

  categories = this.#productStateService.getCategories();
  products = this.#productStateService.getProducts(this.categoryIdSignal);
}
