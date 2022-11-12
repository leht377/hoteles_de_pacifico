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
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Registar', url: '/pages/opcionderegistro', icon: 'add-circle' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
