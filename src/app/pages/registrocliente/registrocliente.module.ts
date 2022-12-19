import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroclientePageRoutingModule } from './registrocliente-routing.module';
import { RegistroclientePage } from './registrocliente.page';
import { } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroclientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroclientePage]
})
export class RegistroclientePageModule {}
