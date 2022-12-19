import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarHotelPage } from './editar-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: EditarHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarHotelPageRoutingModule {}
