import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoteldetallesPageRoutingModule } from './hoteldetalles-routing.module';
import { EstrellasComponent } from '../../components/estrellas/estrellas.component';

import { HoteldetallesPage } from './hoteldetalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoteldetallesPageRoutingModule
  ],
  declarations: [HoteldetallesPage,EstrellasComponent]
})
export class HoteldetallesPageModule {}
