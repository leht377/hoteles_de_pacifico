import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaHotelesPageRoutingModule } from './lista-hoteles-routing.module';

import { ListaHotelesPage } from './lista-hoteles.page';
import { EstrellasModule } from '../../components/estrellas/estrellas.module';
import { HotelItemComponent } from '../../components/hotel-item/hotel-item.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaHotelesPageRoutingModule,
    EstrellasModule
  ],
  declarations: [ListaHotelesPage,HotelItemComponent]
})
export class ListaHotelesPageModule {}
