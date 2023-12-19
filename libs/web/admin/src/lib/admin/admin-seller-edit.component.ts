import {
  Component,
  Injector,
  Input,
  inject,
  runInInjectionContext,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminStateService } from './admin-state.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'vg-admin-seller-edit',
  template: `
    <form [formGroup]="form" (submit)="submit()" class="flex flex-col gap-2">
      <div class="flex gap-4 items-center">
        <label class="w-20">公司名稱</label>
        <input
          type="text"
          formControlName="name"
          class="border border-green-800 rounded-md bg-green-50 px-2"
        />
      </div>
      <div class="flex gap-4 items-center">
        <label class="w-20">公司統編</label>
        <input
          type="text"
          formControlName="taxId"
          class="border border-green-800 rounded-md bg-green-50 px-2"
        />
      </div>
      <div class="flex gap-4 items-center">
        <label class="w-20">聯絡電話</label>
        <input
          type="phone"
          formControlName="phone"
          class="border border-green-800 rounded-md bg-green-50 px-2"
        />
      </div>
      <div class="flex gap-4 items-center">
        <label class="w-20">聯絡信箱</label>
        <input
          type="email"
          formControlName="email"
          class="border border-green-800 rounded-md bg-green-50 px-2"
        />
      </div>
      <div class="flex gap-4 items-center">
        <label class="w-20">聯絡地址</label>
        <input
          type="address"
          formControlName="address"
          class="border border-green-800 rounded-md bg-green-50 px-2"
        />
      </div>
      <div class="w-full flex justify-end">
        <button
          type="submit"
          class="bg-green-800 text-white rounded-md px-4 py-1 text-sm"
        >
          儲存
        </button>
      </div>
    </form>
  `,
  styles: [``],
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
})
export class AdminSellerEditComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    taxId: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });

  submit() {
    if (!this.form.valid) {
      alert('請輸入正確的資料');
      return;
    }
    console.log(this.form.getRawValue());
  }
}
