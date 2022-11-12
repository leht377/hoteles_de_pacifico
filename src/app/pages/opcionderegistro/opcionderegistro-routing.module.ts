import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionderegistroPage } from './opcionderegistro.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionderegistroPage
  },
  {
    path: 'registrocliente',
    loadChildren: () => import('../../pages/registrocliente/registrocliente.module').then( m => m.RegistroclientePageModule)
  },
  {
    path: 'registroadministrador',
    loadChildren: () => import('../../pages/registroadministrador/registroadministrador.module').
    then( m => m.RegistroadministradorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionderegistroPageRoutingModule {}
