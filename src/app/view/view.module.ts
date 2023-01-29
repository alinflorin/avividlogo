import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ArComponent } from './ar/ar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewComponent,
    ArComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,

    SharedModule
  ]
})
export class ViewModule { }
