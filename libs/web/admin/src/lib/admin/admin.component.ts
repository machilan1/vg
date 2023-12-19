import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vg-admin',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: ` <div class="w-full pt-8">
    <div class="grid grid-cols-[1fr_5fr] gap-12">
      <div class="border-r border-green-900 text-center">
        <a
          routerLink="."
          routerLinkActive="text-green-800"
          [routerLinkActiveOptions]="{ exact: true }"
          class="flex flex-col"
          >所有廠商</a
        >
        <a
          routerLink="products"
          routerLinkActive="text-green-800"
          class="flex flex-col"
          >所有商品</a
        >
      </div>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>`,
})
export class AdminComponent {}
