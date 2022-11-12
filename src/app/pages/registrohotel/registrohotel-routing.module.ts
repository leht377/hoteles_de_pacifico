import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrohotelPage } from './registrohotel.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrohotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrohotelPageRoutingModule {}
