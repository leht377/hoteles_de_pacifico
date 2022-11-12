import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoteldetallesPage } from './hoteldetalles.page';

const routes: Routes = [
  {
    path: '',
    component: HoteldetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoteldetallesPageRoutingModule {}
