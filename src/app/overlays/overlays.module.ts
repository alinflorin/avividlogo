import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlaysRoutingModule } from './overlays-routing.module';
import { OverlaysComponent } from './overlays.component';
import { MyOverlaysComponent } from './my-overlays/my-overlays.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationModule } from '../shared/confirmation/confirmation.module';
import { ToastModule } from '../shared/toast/toast.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlaysService } from './services/overlays.service';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PreviewComponent } from './preview/preview.component';
import { AddEditOverlayComponent } from './add-edit-overlay/add-edit-overlay.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [OverlaysComponent, MyOverlaysComponent, PreviewComponent, AddEditOverlayComponent],
  imports: [
    CommonModule,
    OverlaysRoutingModule,
    SharedModule,
    ConfirmationModule,
    ToastModule,

    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatProgressBarModule
  ],
  providers: [
    OverlaysService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OverlaysModule {}
