import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOverlaysComponent } from './my-overlays/my-overlays.component';
import { OverlaysComponent } from './overlays.component';

const routes: Routes = [
  {
    path: '',
    component: OverlaysComponent,
    children: [
      {
        path: '',
        component: MyOverlaysComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverlaysRoutingModule {}
