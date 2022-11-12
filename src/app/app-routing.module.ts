import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/lista-hoteles',
    pathMatch: 'full'
  },
  {
    path: 'pages/lista-hoteles',
    loadChildren: () => import('./pages/lista-hoteles/lista-hoteles.module').then( m => m.ListaHotelesPageModule)
  },
  {
    path: 'hoteldetalles',
    loadChildren: () => import('./pages/hoteldetalles/hoteldetalles.module').then( m => m.HoteldetallesPageModule)
  },

  {
    path: 'registrohotel',
    loadChildren: () => import('./pages/registrohotel/registrohotel.module').then( m => m.RegistrohotelPageModule)
  },
  {
    path: 'pages/opcionderegistro',
    loadChildren: () => import('./pages/opcionderegistro/opcionderegistro.module').then( m => m.OpcionderegistroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
