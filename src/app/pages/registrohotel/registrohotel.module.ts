import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrohotelPageRoutingModule } from './registrohotel-routing.module';

import { RegistrohotelPage } from './registrohotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrohotelPageRoutingModule
  ],
  declarations: [RegistrohotelPage]
})
export class RegistrohotelPageModule {}
