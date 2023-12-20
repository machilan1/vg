import { Injectable, inject } from '@angular/core';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { AuthService, LoginDto } from '@vg/oai';
import { firstValueFrom } from 'rxjs';
import { ACCESS_TOKEN_STORAGE_KEY } from './key.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  #authService = inject(AuthService);

  loginMutation = injectMutation(() => ({
    mutationKey: ['login'],
    mutationFn: (loginDto: LoginDto) =>
      firstValueFrom(this.#authService.login({ body: loginDto })),
    onSuccess: (data) => {
      const { jwt } = data;
      this.#saveToken(jwt);
    },
  }));

  #saveToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
  }
}
