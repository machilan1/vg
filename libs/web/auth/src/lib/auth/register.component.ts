import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'vg-register',
  template: `
    <div class="w-full h-screen flex flex-col justify-center items-center">
      <div class="text-5xl py-6">註冊</div>
      <form
        [formGroup]="registerForm"
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
        /><input
          type="password"
          class="border border-green-800 rounded-md p-2"
          placeholder="確認密碼"
          formControlName="confirmPassword"
        />
        <div class="w-full flex justify-center">
          <button
            type="submit"
            class="bg-green-800 text-white rounded-md px-4 py-1 w-fit"
          >
            註冊
          </button>
        </div>
      </form>
    </div>
  `,
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  submit() {
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      alert('密碼不一致');
      return;
    }
    if (!this.registerForm.valid) {
      alert('請輸入正確資料');
      return;
    }
    console.log(this.registerForm.getRawValue());
  }
}
