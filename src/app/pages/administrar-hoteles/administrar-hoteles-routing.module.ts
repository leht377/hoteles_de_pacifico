import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarHotelesPage } from './administrar-hoteles.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarHotelesPage
  },
  {
    path: 'pages/registrohotel',
    loadChildren: () => import('../../pages/registrohotel/registrohotel.module').then( m => m.RegistrohotelPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarHotelesPageRoutingModule {}
