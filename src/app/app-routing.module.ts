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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
