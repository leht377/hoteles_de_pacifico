import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Cliente } from '../interface/cliente';

import { environment } from 'src/environments/environment';
import {catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url = environment.apiUrl;
  public cliente = new Cliente();

  constructor(private http: HttpClient) {   }

  obtener(id: string) {
    return this.http.get<Cliente>(this.url + `/clientes/findByIdUsername/${id}`)
    .pipe(
      map((res: any) => res[0]),
      catchError((error)=> of(error))
    );
  }

  crear(cliente: Cliente){
    return this.http.post<Cliente>(this.url + '/clientes',cliente)
    .pipe(
      map((res: any) => res),
      catchError((error)=> of(error))
    );
  }


}
