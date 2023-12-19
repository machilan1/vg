import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vg-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="w-full h-full  flex flex-col gap-20">
      <div class="text-center text-7xl pt-32">Looking For ...</div>
      <div class="w-full grid grid-cols-4 grid-rows-2 gap-12">
        @for (category of categories; track category.name) {
          <a
            routerLink="/products"
            class="flex flex-col justify-center items-center border rounded-md border-green-800 w-full aspect-[2/1]"
          >
            <div class="text-2xl">{{ category.name }}</div>
          </a>
        }
      </div>
    </div>
  `,
  styles: [``],
})
export class HomeComponent {
  categories = [
    {
      name: '葉菜類',
    },
    { name: '根莖類' },
    { name: '五穀雜糧類' },
    { name: '米麵類' },
    { name: '水果' },
    { name: '豆類' },
    { name: '進口產品' },
    { name: '其他產品' },
  ];
}
