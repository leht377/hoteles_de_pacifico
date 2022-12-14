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

  crear(cliente: Cliente){
    return this.http.post<Cliente>(this.url + '/clientes',cliente)
    .pipe(
      map((res: any) => res),
      catchError((error)=> of(error))
    );
  }


}
