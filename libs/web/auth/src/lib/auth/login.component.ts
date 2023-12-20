import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthStateService } from './auth-state.service';

@Component({
  selector: 'vg-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="w-full h-screen flex flex-col justify-center items-center">
      <div class="text-5xl py-6">登入</div>
      <form
        [formGroup]="loginForm"
        (submit)="submit()"
        class="border border-green-800 rounded-md px-20 py-8 flex flex-col gap-4 w-1/3"
      >
        <input
          type="email"
          class="border border-green-800 rounded-md p-2"
          placeholder="帳號"
          formControlName="username"
        />
        <input
          type="password"
          class="border border-green-800 rounded-md p-2"
          placeholder="密碼"
          formControlName="password"
        />
        <div class="w-full flex justify-center">
          <button
            type="submit"
            class="bg-green-800 text-white rounded-md px-4 py-1 w-fit"
          >
            登入
          </button>
        </div>
      </form>
    </div>
  `,
})
export class LoginComponent {
  #authStateService = inject(AuthStateService);

  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  submit() {
    if (!this.loginForm.valid) {
      alert('請輸入正確的帳號密碼');
      return;
    }
    console.log(this.loginForm.getRawValue());

    this.#authStateService.loginMutation().mutate({
      email: this.loginForm.getRawValue().username,
      password: this.loginForm.getRawValue().password,
    });
  }
}
