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
import { MatStepperModule } from '@angular/material/stepper';
import { LogosService } from './services/logos.service';
import { MatListModule } from '@angular/material/list';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    MatStepperModule,
    MatListModule,
    NgxQrcodeStylingModule,
    MatProgressBarModule,
  ],
  providers: [
    LogosService,
  ],
})
export class LogosModule {}
