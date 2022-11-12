import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaHotelesPage } from './lista-hoteles.page';

const routes: Routes = [
  {
    path: '',
    component: ListaHotelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaHotelesPageRoutingModule {}