import { user } from './../../../../../api/database/src/lib/schema';
import { Injectable, Signal, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { Product, ProductsService, User, UsersService } from '@vg/oai';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminStateService {
  #usersService = inject(UsersService);
  #productsService = inject(ProductsService);

  getUsers() {
    return injectQuery(() => ({
      queryKey: ['users'],
      queryFn: () => firstValueFrom(this.#usersService.findUsers()),
    }));
  }

  getUserById(userId: Signal<string>) {
    return injectQuery(() => ({
      queryKey: ['users', { userId: userId() }],
      queryFn: () =>
        firstValueFrom(
          this.#usersService.findUser({ userId: Number(userId()) }),
        ),
      enabled: userId() !== '',
    }));
  }

  // updateUser(userId: number, body: User) {
  //   return injectQuery(() => ({
  //     queryKey: ['users'],
  //     queryFn: () =>
  //       firstValueFrom(this.#usersService.updateUser({ userId, body })),
  //   }));
  // }

  // deleteUser(userId: number) {
  //   return injectQuery(() => ({
  //     queryKey: ['users', userId],
  //     queryFn: () => firstValueFrom(this.#usersService.deleteUser({ userId })),
  //   }));
  // }

  getProducts() {
    return injectQuery(() => ({
      queryKey: ['products'],
      queryFn: () => firstValueFrom(this.#productsService.getProducts()),
    }));
  }

  getProductById(productId: Signal<string>) {
    return injectQuery(() => ({
      queryKey: ['products', { productId: productId() }],
      queryFn: () =>
        firstValueFrom(
          this.#productsService.getProductById({
            productId: Number(productId()),
          }),
        ),
    }));
  }

  // // TODO :fix this: type is wrong (category)
  // createProduct(body: any) {
  //   return injectQuery(() => ({
  //     queryKey: ['products'],
  //     queryFn: () =>
  //       firstValueFrom(this.#productsService.createProduct({ body })),
  //   }));
  // }

  // // TODO :fix this: type is wrong (wrong)
  // updateProduct(productId: number, body: any) {
  //   return injectQuery(() => ({
  //     queryKey: ['products'],
  //     queryFn: () =>
  //       firstValueFrom(
  //         this.#productsService.updateProduct({ productId, body }),
  //       ),
  //   }));
  // }

  // deleteProduct(productId: number) {
  //   return injectQuery(() => ({
  //     queryKey: ['products', productId],
  //     queryFn: () =>
  //       firstValueFrom(this.#productsService.deleteProduct({ productId })),
  //   }));
  // }
}
