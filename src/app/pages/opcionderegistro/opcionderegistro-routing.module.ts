import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionderegistroPage } from './opcionderegistro.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionderegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionderegistroPageRoutingModule {}
