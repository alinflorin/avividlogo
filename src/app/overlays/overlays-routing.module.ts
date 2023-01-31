import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditOverlayComponent } from './add-edit-overlay/add-edit-overlay.component';
import { MyOverlaysComponent } from './my-overlays/my-overlays.component';
import { OverlaysComponent } from './overlays.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {
    path: '',
    component: OverlaysComponent,
    children: [
      {
        path: '',
        component: MyOverlaysComponent,
      },
      {
        path: 'preview/:id',
        component: PreviewComponent,
      },
      {
        path: 'edit/:id',
        component: AddEditOverlayComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverlaysRoutingModule {}
