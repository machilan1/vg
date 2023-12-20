import { Component } from '@angular/core';

@Component({
  selector: 'vg-page-not-found',
  template: `
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl text-gray-800">404</h1>
      <p class="text-gray-800">Page not found</p>
    </div>
  `,
})
export class PageNotFoundComponent {}
