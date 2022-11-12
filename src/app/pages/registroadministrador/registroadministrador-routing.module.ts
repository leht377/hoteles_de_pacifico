import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroadministradorPage } from './registroadministrador.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroadministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroadministradorPageRoutingModule {}
