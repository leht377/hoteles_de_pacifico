import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Hoteles', url: '/pages/lista-hoteles', icon: 'bed' },
    { title: 'Administrar Hotel', url: '/pages/administrar-hoteles', icon: 'clipboard' },
    { title: 'Iniciar sesion', url: '/folder/Favorites', icon: 'log-in' },
   // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Registar', url: '/pages/opcionderegistro', icon: 'add-circle' },
    { title: 'Cerrar sesión', url: '/folder/Spam', icon: 'exit' },
  ];
  constructor() {}
}
