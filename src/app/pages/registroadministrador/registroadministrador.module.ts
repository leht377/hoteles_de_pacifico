import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroadministradorPageRoutingModule } from './registroadministrador-routing.module';

import { RegistroadministradorPage } from './registroadministrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroadministradorPageRoutingModule
  ],
  declarations: [RegistroadministradorPage]
})
export class RegistroadministradorPageModule {}
