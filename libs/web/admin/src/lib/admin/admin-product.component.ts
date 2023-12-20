import { Component, Input, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminStateService } from './admin-state.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'vg-admin-product',
  template: `
    @if (product.isLoading()) {
      <div>Loading...</div>
    } @else if (product.isError()) {
      <div>error</div>
    } @else {
      <div class="w-full flex justify-end">
        <button
          class="bg-green-800 text-white rounded-md px-4 py-1"
          routerLink="edit"
        >
          編輯
        </button>
      </div>
      <div class="w-full h-full flex flex-col gap-8 pt-4">
        <div class="grid grid-cols-[2fr_1fr] gap-12">
          <img
            [src]="product.data()!.image"
            class="w-full aspect-[2/1] rounded-md"
            alt=""
          />
          <div class="flex flex-col gap-12">
            <div>
              <h3 class="text-lg font-semibold">
                產品名稱 {{ product.data()!.name }}
              </h3>
              <p>最新價格 {{ product.data()!.latestPrice }}</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">產銷履歷</h3>
              <div class="pt-4">
                <div>供應商名稱 {{ product.data()!.seller!.name }}</div>
                <div>統一編號 {{ product.data()!.seller!.taxId }}</div>
                <div>聯絡電話 {{ product.data()!.seller!.phone }}</div>
                <div>電子信箱 {{ product.data()!.seller!.email }}</div>
                <div>聯絡地址 {{ product.data()!.seller!.address }}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold">歷史價格</h3>
          <div class="pt-4">
            <div class="grid grid-cols-3 border-b py-1">
              <div>日期</div>
              <div>追蹤履歷號</div>
              <div>單位價格 / 單位</div>
            </div>
            @for (record of product.data()!.records; track record.recordId) {
              <div class="grid grid-cols-3 border-b hover:text-red-500 py-1">
                <div>{{ record.createdAt }}</div>
                <div>{{ record.trackNumber }}</div>
                <div>{{ record.unitPrice }} / {{ record.unitOfMeasure }}</div>
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
  styles: [``],
  standalone: true,
  imports: [RouterLink],
})
export class AdminProductComponent {
  #adminStateService = inject(AdminStateService);

  productIdSignal = signal<string>('');

  @Input()
  set productId(productId: string) {
    this.productIdSignal.set(productId);
  }

  product = this.#adminStateService.getProductById(this.productIdSignal);
}
