import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaHotelesPageRoutingModule } from './lista-hoteles-routing.module';

import { ListaHotelesPage } from './lista-hoteles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaHotelesPageRoutingModule
  ],
  declarations: [ListaHotelesPage]
})
export class ListaHotelesPageModule {}
