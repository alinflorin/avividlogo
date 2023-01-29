import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArComponent } from './ar/ar.component';
import { ViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: ':id',
        component: ArComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
