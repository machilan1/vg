import { Component } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'vg-web-shell',
  template: `
    <vg-web-layout>
      <router-outlet></router-outlet>
    </vg-web-layout>
  `,
  styles: [``],
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
})
export class ShellComponent {}
