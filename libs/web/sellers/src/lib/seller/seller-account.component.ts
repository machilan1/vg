import { Component, inject } from '@angular/core';
import { SellerStateService } from './seller-state.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'vg-seller-account',
  template: `
    <pre>{{ user | json }}</pre>
    <div class="w-full">
      <p>帳戶信箱</p>
      <p>公司名稱</p>
      <p>公司地址</p>
      <p>公司電話</p>
      <p>公司簡介</p>
      <p>公司統編</p>
    </div>
  `,
  standalone: true,
  imports: [JsonPipe],
})
export class SellerAccountComponent {
  #sellerStateService = inject(SellerStateService);

  // user = this.#sellerStateService.fineMe();

  user = this.#sellerStateService.getUser(1);
}
