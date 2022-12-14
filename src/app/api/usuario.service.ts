import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url = environment.apiUrl;
  public usuario = new Usuario();


  constructor(private http: HttpClient) { }

  crear(usuario: Usuario){
    return this.http.post<Usuario>(this.url + '/usuarios',usuario)
    .pipe(
      map((res: any) => res),
      catchError((error)=> of(error))
    );
  }

}
