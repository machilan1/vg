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
  selector: 'vg-seller-product-edit',
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

        <div class="flex gap-4">
          <label class="w-20">產品圖片</label>
          <input
            type="image"
            formControlName="image"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-2xl">廠商資訊</h3>
        <div class="flex gap-4">
          <label class="w-20">廠商名稱</label>
          <input
            type="text"
            formControlName="sellerName"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div>
        <div class="flex gap-4">
          <label class="w-20">廠商名稱</label>
          <input
            type="text"
            formControlName="sellerTaxId"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div>
        <div class="flex gap-4">
          <label class="w-20">廠商名稱</label>
          <input
            type="text"
            formControlName="sellerPhone"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div>
        <div class="flex gap-4">
          <label class="w-20">廠商名稱</label>
          <input
            type="text"
            formControlName="sellerEmail"
            class="border border-green-800  bg-green-50 rounded-md"
          />
        </div>
        <div class="flex gap-4">
          <label class="w-20">廠商名稱</label>
          <input
            type="text"
            formControlName="sellerAddress"
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
        <ng-container formArrayName="records">
          @for (history of records.controls; track history; let i = $index) {
            <div class="flex gap-6" [formGroupName]="i">
              <div class="flex gap-4 pt-2">
                <label>日期</label>
                <input
                  formControlName="date"
                  type="date"
                  class="border border-green-800  bg-green-50 rounded-md"
                />
              </div>
              <div class="flex gap-4 pt-2">
                <label> 追蹤履歷號</label>
                <input
                  formControlName="trackNumber"
                  type="text"
                  class="border border-green-800  bg-green-50 rounded-md"
                />
              </div>
              <div class="flex gap-4 pt-2">
                <label>單位價格</label>
                <input
                  formControlName="unitPrice"
                  type="text"
                  class="border border-green-800  bg-green-50 rounded-md"
                />
              </div>
              <div class="flex gap-4 pt-2">
                <label>單位</label>
                <input
                  formControlName="unitOfMeasure"
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
          儲存</button
        ><a
          routerLink="/seller/product"
          type="submit"
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
export class SellerProductEditComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    sellerName: new FormControl('', Validators.required),
    sellerTaxId: new FormControl('', Validators.required),
    sellerPhone: new FormControl('', Validators.required),
    sellerEmail: new FormControl('', [Validators.required, Validators.email]),
    sellerAddress: new FormControl('', Validators.required),
    records: new FormArray([]),
  });

  get records() {
    return this.form.get('records') as FormArray;
  }

  addHistory() {
    this.records.push(
      new FormGroup({
        date: new FormControl('', Validators.required),
        trackNumber: new FormControl('', Validators.required),
        unitPrice: new FormControl('', Validators.required),
        unitOfMeasure: new FormControl('', Validators.required),
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
