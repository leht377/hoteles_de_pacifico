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
    path: 'pages/opcionderegistro',
    loadChildren: () => import('./pages/opcionderegistro/opcionderegistro.module').then( m => m.OpcionderegistroPageModule)
  },
  {
    path: 'pages/administrar-hoteles',
    loadChildren: () => import('./pages/administrar-hoteles/administrar-hoteles.module').then( m => m.AdministrarHotelesPageModule)
  },
  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'editar-hotel',
    loadChildren: () => import('./pages/editar-hotel/editar-hotel.module').then( m => m.EditarHotelPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
