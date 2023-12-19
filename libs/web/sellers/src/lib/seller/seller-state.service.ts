import { Injectable, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { AuthService, ProductsService, UsersService } from '@vg/oai';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerStateService {
  #usersService = inject(UsersService);
  #productsService = inject(ProductsService);
  #authService = inject(AuthService);

  fineMe() {
    return injectQuery(() => ({
      queryKey: ['me'],
      queryFn: () => firstValueFrom(this.#authService.findMe()),
    }));
  }

  getUser(userId: number) {
    return injectQuery(() => ({
      queryKey: ['users', userId],
      queryFn: () => firstValueFrom(this.#usersService.findUser({ userId })),
    }));
  }

  getProducts(userId: number) {
    return injectQuery(() => ({
      queryKey: ['products', userId],
      queryFn: () =>
        firstValueFrom(this.#productsService.getProducts({ userId })),
    }));
  }

  getProductById(productId: number) {
    return injectQuery(() => ({
      queryKey: ['products', productId],
      queryFn: () =>
        firstValueFrom(this.#productsService.getProductById({ productId })),
    }));
  }

  // TODO :fix this: type is wrong (category)
  createProduct(body: any) {
    return injectQuery(() => ({
      queryKey: ['products'],
      queryFn: () =>
        firstValueFrom(this.#productsService.createProduct({ body })),
    }));
  }

  // TODO :fix this: type is wrong (wrong)
  updateProduct(productId: number, body: any) {
    return injectQuery(() => ({
      queryKey: ['products'],
      queryFn: () =>
        firstValueFrom(
          this.#productsService.updateProduct({ productId, body }),
        ),
    }));
  }

  deleteProduct(productId: number) {
    return injectQuery(() => ({
      queryKey: ['products', productId],
      queryFn: () =>
        firstValueFrom(this.#productsService.deleteProduct({ productId })),
    }));
  }
}
