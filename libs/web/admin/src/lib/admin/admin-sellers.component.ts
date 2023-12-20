import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { AdminStateService } from './admin-state.service';

@Component({
  selector: 'vg-admin-sellers',
  template: `
    @if (sellers.isLoading()) {
      <div>loading</div>
    } @else if (sellers.isError()) {
      <div>error</div>
    } @else {
      <div class="w-full flex justify-end">
        <button
          class="bg-green-800 text-white rounded-md px-4 py-1"
          routerLink="seller/new"
        >
          新增
        </button>
      </div>
      <mat-table [dataSource]="sellers.data()!" class="mat-elevation-z8">
        <ng-container matColumnDef="name">
          <mat-header-cell mat-header-cell *matHeaderCellDef>
            Name
          </mat-header-cell>
          <mat-cell mat-cell *matCellDef="let data">
            {{ data.name }}
          </mat-cell>
        </ng-container>

        <ng-container matColumnDef="phone">
          <mat-header-cell mat-header-cell *matHeaderCellDef>
            phone
          </mat-header-cell>
          <mat-cell mat-cell *matCellDef="let data">
            {{ data.phone }}
          </mat-cell>
        </ng-container>

        <ng-container matColumnDef="email">
          <mat-header-cell mat-header-cell *matHeaderCellDef>
            email
          </mat-header-cell>
          <mat-cell mat-cell *matCellDef="let data">
            {{ data.email }}
          </mat-cell>
        </ng-container>

        <ng-container matColumnDef="address">
          <mat-header-cell mat-header-cell *matHeaderCellDef>
            address
          </mat-header-cell>
          <mat-cell mat-cell *matCellDef="let data">
            {{ data.address }}
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row
          class="hover:bg-green-200 hover:cursor-pointer"
          *matRowDef="let row; columns: displayedColumns"
          routerLink="/admin/seller/{{ row.userId }}"
        >
        </mat-row>
      </mat-table>
    }
  `,
  standalone: true,
  imports: [MatTableModule, RouterLink, JsonPipe],
})
export class AdminSellersComponent {
  #adminStateService = inject(AdminStateService);

  sellers = this.#adminStateService.getUsers();

  displayedColumns: string[] = ['name', 'phone', 'email', 'address'];
}
