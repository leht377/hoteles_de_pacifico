import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarHotelesPageRoutingModule } from './administrar-hoteles-routing.module';

import { AdministrarHotelesPage } from './administrar-hoteles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarHotelesPageRoutingModule
  ],
  declarations: [AdministrarHotelesPage]
})
export class AdministrarHotelesPageModule {}
