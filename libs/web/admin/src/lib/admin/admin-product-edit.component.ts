import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vg-admin-product-edit',
  template: `
    <form
      [formGroup]="form"
      (submit)="submit()"
      class="w-full flex flex-col gap-6"
    >
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl">產品資訊</h3>
        <div class="flex gap-4">
          <label class="w-20">產品名稱</label>
          <input
            type="text"
            formControlName="name"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div>

        <!-- <div class="flex gap-4">
          <label class="w-20">產品圖片</label>
          <input
            type="image"
            formControlName="image"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div> -->
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-2xl">廠商資訊</h3>
        <div class="flex gap-4">
          <label class="w-20">廠商名稱</label>
          <input
            type="text"
            formControlName="seller"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <h3 class="text-2xl">歷史價格</h3>
          <button
            type="button"
            class="bg-green-800 text-white rounded-md w-fit px-4 py-1 text-sm"
            (click)="addHistory()"
          >
            新增
          </button>
        </div>
        <ng-container formArrayName="histories">
          @for (history of histories.controls; track history; let i = $index) {
            <div class="flex gap-6">
              <div class="flex gap-4 pt-2" [formGroupName]="i">
                <label>日期</label>
                <input
                  formControlName="date"
                  type="text"
                  class="border border-green-800  bg-green-50 rounded-md"
                />
              </div>
              <div class="flex gap-4 pt-2" [formGroupName]="i">
                <label>價錢</label>
                <input
                  formControlName="price"
                  type="text"
                  class="border border-green-800  bg-green-50 rounded-md"
                />
              </div>
            </div>
          }
        </ng-container>
      </div>
      <div class="flex gap-4">
        <button
          type="submit"
          class="bg-green-800 text-white rounded-md w-fit px-4 py-1 text-sm"
        >
          儲存
        </button>
        <!-- TODO: router back to the productID -->
        <a
          routerLink=".."
          class="border-green-800 border rounded-md w-fit px-4 py-1 text-sm"
        >
          取消
        </a>
      </div>
    </form>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class AdminProductEditComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    seller: new FormControl('', Validators.required),
    histories: new FormArray<FormGroup>([]),
  });

  get histories() {
    return this.form.get('histories') as FormArray;
  }

  addHistory() {
    this.histories.push(
      new FormGroup({
        date: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
      }),
    );
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.getRawValue());
  }
}
