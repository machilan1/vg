import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vg-admin-sellers',
  template: `
    <mat-table [dataSource]="data" class="mat-elevation-z8">
      <ng-container matColumnDef="name">
        <mat-header-cell mat-header-cell *matHeaderCellDef>
          Name
        </mat-header-cell>
        <mat-cell mat-cell *matCellDef="let element">
          {{ element.name }}
        </mat-cell>
      </ng-container>

      <ng-container matColumnDef="phone">
        <mat-header-cell mat-header-cell *matHeaderCellDef>
          phone
        </mat-header-cell>
        <mat-cell mat-cell *matCellDef="let element">
          {{ element.name }}
        </mat-cell>
      </ng-container>

      <ng-container matColumnDef="email">
        <mat-header-cell mat-header-cell *matHeaderCellDef>
          email
        </mat-header-cell>
        <mat-cell mat-cell *matCellDef="let element">
          {{ element.name }}
        </mat-cell>
      </ng-container>

      <ng-container matColumnDef="address">
        <mat-header-cell mat-header-cell *matHeaderCellDef>
          address
        </mat-header-cell>
        <mat-cell mat-cell *matCellDef="let element">
          {{ element.name }}
        </mat-cell>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row
        class="hover:bg-green-200 hover:cursor-pointer"
        *matRowDef="let row; columns: displayedColumns"
        routerLink="edit"
      >
      </mat-row>
    </mat-table>
  `,
  standalone: true,
  imports: [MatTableModule, RouterLink],
})
export class AdminSellersComponent {
  data = [
    { id: 1, name: 'Hydrogen', phone: '123', email: '123', address: '123' },
    { id: 2, name: 'Helium', phone: '123', email: '123', address: '123' },
    { id: 3, name: 'Lithium', phone: '123', email: '123', address: '123' },
    { id: 4, name: 'Beryllium', phone: '123', email: '123', address: '123' },
    { id: 5, name: 'Boron', phone: '123', email: '123', address: '123' },
    { id: 6, name: 'Carbon', phone: '123', email: '123', address: '123' },
    { id: 7, name: 'Nitrogen', phone: '123', email: '123', address: '123' },
    { id: 8, name: 'Oxygen', phone: '123', email: '123', address: '123' },
    { id: 9, name: 'Fluorine', phone: '123', email: '123', address: '123' },
    { id: 10, name: 'Neon', phone: '123', email: '123', address: '123' },
  ];

  displayedColumns: string[] = ['name', 'phone', 'email', 'address'];
}
