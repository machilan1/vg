import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';

@Component({
  standalone: true,
  imports: [RouterModule, AngularQueryDevtools],
  selector: 'vg-root',
  template: `
    <angular-query-devtools initialIsOpen />
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class AppComponent {}
