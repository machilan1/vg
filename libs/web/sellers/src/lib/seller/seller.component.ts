import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vg-seller',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="w-full pt-8">
      <div class="grid grid-cols-[1fr_5fr] gap-12">
        <div class="border-r border-green-900 text-center">
          <a
            routerLink="."
            routerLinkActive="text-green-800"
            [routerLinkActiveOptions]="{ exact: true }"
            class="flex flex-col"
            >帳戶資訊</a
          >
          <a
            routerLink="products"
            routerLinkActive="text-green-800"
            class="flex flex-col"
            >我的商品</a
          >
        </div>
        <div>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class SellerComponent {}
