import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ArComponent } from './ar/ar.component';
import { SharedModule } from '../shared/shared.module';
import { OverlaysService } from '../overlays/services/overlays.service';
import { LogosService } from '../logos/services/logos.service';

@NgModule({
  declarations: [ViewComponent, ArComponent],
  imports: [CommonModule, ViewRoutingModule, SharedModule],
  providers: [OverlaysService, LogosService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewModule {}
