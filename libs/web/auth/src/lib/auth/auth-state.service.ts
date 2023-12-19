import { Injectable, inject } from '@angular/core';
import { AuthService } from '@vg/oai';

@Injectable({
  providedIn: 'root',
})
export class AdminStateService {
  #authService = inject(AuthService);
}
