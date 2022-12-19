import { NgModule } from '@angular/core';
import {EstrellasComponent } from './estrellas.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    EstrellasComponent,
  ],
  exports: [
    EstrellasComponent,
  ]
})
export class EstrellasModule { }
