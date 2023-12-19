import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vg-seller-product',
  template: `
    <div class="w-full flex justify-end">
      <a
        routerLink="edit"
        class="border px-4 py-1 text-sm bg-green-800 text-white rounded-md"
      >
        編輯
      </a>
    </div>
    <div class="w-full h-full flex flex-col gap-8 pt-4">
      <div class="grid grid-cols-[2fr_1fr] gap-12">
        <img
          src="https://picsum.photos/200"
          class="w-full aspect-[2/1] rounded-md"
          alt=""
        />
        <div>
          <h3 class="text-lg font-semibold">產品名稱</h3>
          <p>最新價格</p>
        </div>
      </div>
      <h3 class="text-lg font-semibold">產銷履歷</h3>
      <div class="pt-4"></div>
      <div>
        <h3 class="text-lg font-semibold">歷史價格</h3>
        <div class="pt-4">
          @for(history of histories; track history.date) {
          <div class="flex justify-between border-b hover:text-red-500 py-1">
            <div>{{ history.date }}</div>
            <div>{{ history.price }}</div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [``],
  standalone: true,
  imports: [RouterLink],
})
export class SellerProductComponent {
  histories = [
    {
      date: '2021-10-01',
      price: 100,
    },
    {
      date: '2021-10-02',
      price: 98,
    },
    {
      date: '2021-10-03',
      price: 99,
    },
    {
      date: '2021-10-04',
      price: 97,
    },
    {
      date: '2021-10-05',
      price: 102,
    },
  ];
}
