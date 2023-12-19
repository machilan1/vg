import { CategoriesService } from '@vg/oai';
import { Injectable, Signal, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ProductsService } from '@vg/oai';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService {
  #productsService = inject(ProductsService);
  #categoriesService = inject(CategoriesService);

  getProducts(categoryId: Signal<string | undefined>) {
    return injectQuery(() => ({
      queryKey: [
        'products',
        categoryId()
          ? {
              categoryId: categoryId(),
            }
          : 'all',
      ],
      // TODO: 這裡要改成用 categoryId 來查詢
      queryFn: () => firstValueFrom(this.#productsService.getProducts()),
    }));
  }

  getCategories() {
    return injectQuery(() => ({
      queryKey: ['categories'],
      queryFn: () => firstValueFrom(this.#categoriesService.findCategories()),
    }));
  }
}
