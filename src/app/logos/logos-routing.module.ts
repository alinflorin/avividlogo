import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogosRoutingModule {}
