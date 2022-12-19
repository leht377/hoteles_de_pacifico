import { Injectable } from '@angular/core';
import { UsuarioLogeado } from '../interface/usuarioLogeado';
import { of,Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogeadoService {
  public usuarioLogeado$ = new Subject<UsuarioLogeado>();
  constructor() { }

  set(usuario: UsuarioLogeado) {
    sessionStorage.setItem('usuarioLogeado', JSON.stringify(usuario));
    this.usuarioLogeado$.next(usuario);
  }

  get(): any {
    const value = sessionStorage.getItem('usuarioLogeado');
    this.usuarioLogeado$.next(JSON.parse(value));
    return value;
  }

  get$(): Observable<UsuarioLogeado> {
    console.log(this.usuarioLogeado$);
    return this.usuarioLogeado$.asObservable();
  }


}
