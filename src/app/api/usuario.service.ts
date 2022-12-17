import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {catchError, map} from 'rxjs/operators';
import { of,Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url = environment.apiUrl;
  public usuario = new Usuario();
  public usuario$ = new Subject<Usuario>();

  constructor(private http: HttpClient) { }

  crear(usuario: Usuario){
    return this.http.post<Usuario>(this.url + '/usuarios',usuario)
    .pipe(
      map((res: any) => res),
      catchError((error)=> of(error))
    );
  }

  autenticar$(): Observable<Usuario>{
    return this.usuario$.asObservable();
  }
  autenticar(usuario: Usuario): Observable<any>{
    return this.http.get<Usuario>(this.url + `/usuarios/findByUsername/${usuario.usuario}`)
    .pipe(
      map((res: any) =>  {
        this.usuario.setValues(res[0]);
        this.usuario$.next(this.usuario);
      }),
      catchError((error) => of(error))
    );
  }

}
