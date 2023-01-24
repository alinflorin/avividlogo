import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogosRoutingModule } from './logos-routing.module';
import { LogosComponent } from './logos.component';
import { MyLogosComponent } from './my-logos/my-logos.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationModule } from '../shared/confirmation/confirmation.module';
import { ToastModule } from '../shared/toast/toast.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddEditLogoComponent } from './add-edit-logo/add-edit-logo.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LogosComponent, MyLogosComponent, AddEditLogoComponent],
  imports: [
    CommonModule,
    LogosRoutingModule,
    SharedModule,
    ConfirmationModule,
    ToastModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
})
export class LogosModule {}
