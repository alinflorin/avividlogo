import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlaysRoutingModule } from './overlays-routing.module';
import { OverlaysComponent } from './overlays.component';
import { MyOverlaysComponent } from './my-overlays/my-overlays.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationModule } from '../shared/confirmation/confirmation.module';
import { ToastModule } from '../shared/toast/toast.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlaysService } from './services/overlays.service';

@NgModule({
  declarations: [OverlaysComponent, MyOverlaysComponent],
  imports: [
    CommonModule,
    OverlaysRoutingModule,
    SharedModule,
    ConfirmationModule,
    ToastModule,

    ReactiveFormsModule,
  ],
  providers: [
    OverlaysService
  ]
})
export class OverlaysModule {}
