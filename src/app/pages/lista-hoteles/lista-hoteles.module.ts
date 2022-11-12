import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaHotelesPageRoutingModule } from './lista-hoteles-routing.module';

import { ListaHotelesPage } from './lista-hoteles.page';
import { EstrellasComponent } from '../../components/estrellas/estrellas.component';
import { HotelItemComponent } from '../../components/hotel-item/hotel-item.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaHotelesPageRoutingModule
  ],
  declarations: [ListaHotelesPage,EstrellasComponent,HotelItemComponent]
})
export class ListaHotelesPageModule {}
