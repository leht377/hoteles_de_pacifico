import { Injectable } from '@angular/core';
import { Observable , Subject, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interface/usuario';
import { Administrador } from '../interface/administrador';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  public url = environment.apiUrl;
  public administrador = new  Administrador();

constructor(
  private  http: HttpClient
){}

 crear (administrador: Administrador){
  return this.http.post <Administrador>(this.url + '/administradors', administrador)
.pipe(
  map((res: any) => res),
  catchError((error)=> of(error))
);

 }


}

// export class AdministradorService {
//   private administrador$= new Subject<Administrador[]>()
//   public administrador: Administrador[] = []

//   constructor(
//     private http: HttpClient
//   ) { }

//   get$(): Observable<Administrador[]>{
//     return this.administrador$.asObservable();
//   }

// gets():Observable<any>{
//   this.administrador = [];
// return this.http.get<Administrador>(environment.apiUrl)

// }



// }
