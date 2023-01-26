import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddEditLogoComponent } from '../add-edit-logo/add-edit-logo.component';
import { AddEditLogoData } from '../models/add-edit-logo-data';

@Component({
  selector: 'app-my-logos',
  templateUrl: './my-logos.component.html',
  styleUrls: ['./my-logos.component.scss'],
})
export class MyLogosComponent implements OnDestroy {
  private _subs: Subscription[] = [];
  constructor(private dialog: MatDialog) {}

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddEditLogoComponent, {
      data: {} as AddEditLogoData,
    });
  }
}
