import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditLogoComponent } from './add-edit-logo/add-edit-logo.component';
import { LogosComponent } from './logos.component';
import { MyLogosComponent } from './my-logos/my-logos.component';

const routes: Routes = [
  {
    path: '',
    component: LogosComponent,
    children: [
      {
        path: '',
        component: MyLogosComponent,
      },
      {
        path: 'add',
        component: AddEditLogoComponent,
      },
      {
        path: 'edit/:id',
        component: AddEditLogoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogosRoutingModule {}
