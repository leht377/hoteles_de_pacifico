import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoteldetallesPageRoutingModule } from './hoteldetalles-routing.module';
import { EstrellasModule } from '../../components/estrellas/estrellas.module';

import { HoteldetallesPage } from './hoteldetalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoteldetallesPageRoutingModule,
    EstrellasModule
  ],
  declarations: [HoteldetallesPage]
})
export class HoteldetallesPageModule {}
