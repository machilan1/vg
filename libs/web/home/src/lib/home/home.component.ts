import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductStateService } from '@vg/products';

@Component({
  selector: 'vg-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="w-full h-full  flex flex-col gap-20">
      <div class="text-center text-7xl pt-32">Looking For ...</div>
      <div class="w-full grid grid-cols-4 grid-rows-2 gap-12">
        @if (categories.isLoading()) {
          <div>loading</div>
        } @else if (categories.isError()) {
          <div>error</div>
        } @else {
          @for (category of categories.data(); track category.name) {
            <a
              routerLink="/products"
              class="flex flex-col justify-center items-center border rounded-md border-green-800 w-full aspect-[2/1]"
            >
              <div class="text-2xl">{{ category.name }}</div>
            </a>
          } @empty {
            <div>empty</div>
          }
        }
      </div>
    </div>
  `,
  styles: [``],
})
export class HomeComponent {
  #productStateService = inject(ProductStateService);

  categories = this.#productStateService.getCategories();
}
