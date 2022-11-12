import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionderegistroPageRoutingModule } from './opcionderegistro-routing.module';

import { OpcionderegistroPage } from './opcionderegistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionderegistroPageRoutingModule
  ],
  declarations: [OpcionderegistroPage]
})
export class OpcionderegistroPageModule {}
