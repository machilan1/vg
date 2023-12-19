import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vg-web-layout',
  template: `
    <div class="w-full h-full min-h-screen px-20 bg-green-50">
      <div class="flex justify-between items-center py-4">
        <div class="flex gap-4 items-center">
          <a
            class="border px-4 py-1 text-sm rounded-md bg-green-800 hover:bg-green-700 text-white"
            routerLink="."
            >首頁</a
          >
          <a
            routerLink="seller"
            class="border px-4 py-1 text-sm bg-green-800 hover:bg-green-700 text-white rounded-md"
          >
            廠商
          </a>
          <a
            routerLink="admin"
            class="border px-4 py-1 text-sm bg-green-800 hover:bg-green-700 text-white rounded-md"
          >
            管理員
          </a>
        </div>

        <div class="flex gap-4">
          <a
            class="border px-4 py-1 text-sm rounded-md hover:bg-gray-100"
            routerLink="register"
            >廠商註冊
          </a>
          <a
            routerLink="login"
            class="border px-4 py-1 text-sm bg-green-800 hover:bg-green-700 text-white rounded-md"
          >
            登入
          </a>
          <a
            routerLink="login"
            class="border px-4 py-1 text-sm bg-green-800 hover:bg-green-700 text-white rounded-md"
          >
            登出
          </a>
        </div>
      </div>

      <ng-content></ng-content>
    </div>
  `,
  styles: [``],
  standalone: true,
  imports: [RouterLink],
})
export class LayoutComponent {}
