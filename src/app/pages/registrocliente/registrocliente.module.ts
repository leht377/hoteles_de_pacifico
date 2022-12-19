import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RegistroclientePageRoutingModule } from './registrocliente-routing.module';
import { RegistroclientePage } from './registrocliente.page';
import { Validators, FormBuilder, FormGroup, FormControl,  } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RegistroclientePageRoutingModule,
    FormBuilder, 
    FormGroup, 
    FormControl,
    
   
  ],
  declarations: [RegistroclientePage]
})
export class RegistroclientePageModule {}
