import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarHotelPageRoutingModule } from './editar-hotel-routing.module';

import { EditarHotelPage } from './editar-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarHotelPageRoutingModule
  ],
  declarations: [EditarHotelPage]
})
export class EditarHotelPageModule {}
