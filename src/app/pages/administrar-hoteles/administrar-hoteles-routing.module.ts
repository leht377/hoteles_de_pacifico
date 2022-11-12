import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarHotelesPage } from './administrar-hoteles.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarHotelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarHotelesPageRoutingModule {}
