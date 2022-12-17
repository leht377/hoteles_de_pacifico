import { Injectable } from '@angular/core';
import { UsuarioLogeado } from '../interface/usuarioLogeado';
import { of,Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogeadoService {
  public usuarioLogeado = new UsuarioLogeado();
  public usuarioLogeado$ = new Subject<UsuarioLogeado>();
  private data$ = new Subject<UsuarioLogeado>();
  constructor() { }

  set(usuario: UsuarioLogeado) {
    sessionStorage.setItem('usuarioLogeado', JSON.stringify(usuario));
    this.data$.next(usuario);
  }

  get(): any {
    const value = sessionStorage.getItem('usuarioLogeado');
    this.data$.next(JSON.parse(value));
    return value;
  }

  getdata(): Observable<any> {
    return this.data$;
  }


}
