import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Administrador } from '../interface/administrador';
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  public administrador = new Administrador();

  private url = environment.apiUrl;


  constructor(private http: HttpClient) { }

  obtener(id: string) {
    return this.http.get<Administrador>(this.url + `/administradors/findByIdUsername/${id}`)
    .pipe(
      map((res: any) => res[0]),
      catchError((error)=> of(error))

    );
  }

  crear(administrador: Administrador){
    // console.log('creando');
    return this.http.post<Administrador>(this.url + '/administradors',administrador)
    .pipe(
      map((res: any) => res),
      catchError((error)=> of(error))
    );
  }

}

