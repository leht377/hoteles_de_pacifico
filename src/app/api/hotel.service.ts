import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Hotel } from '../interface/hotel';
import {catchError, map} from 'rxjs/operators';
import { of,Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public hotelesPorAdministrador: Hotel [] = [];
  public hotelesPorAdministrador$ = new Subject<Hotel[]> ();

  public todosHoteles: Hotel [] = [];
  public todosHoteles$ = new Subject<Hotel[]>();



  public hotel: Hotel;

  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  crear(hotel: Hotel){
    return this.http.post<Hotel>(this.url + '/hotels',hotel)
    .pipe(
      map((hotelCreado: any) => hotelCreado),
      catchError((error)=> of(error))
    );
  }

  getOne(id: string): Observable <any> {
    return this.http.get<Hotel>(this.url +`/hotels/${id}`)
    .pipe(
    map(res => res),
    catchError((error)=> of(error))
    );
  }

  getAll$(): Observable<Hotel []>{
    return this.todosHoteles$.asObservable();
  }

  setAll(hoteles: Hotel []){
    this.todosHoteles$.next(hoteles);
  }


  update(data: Hotel): Observable <any> {
    return this.http.put<Hotel []>(this.url +`/hotels/${data.id}`,data)
    .pipe(
      map((res)=> res),
      catchError((error)=> of(error))
    );
  }

  getAll(): Observable <any> {
    this.todosHoteles = [];
    return this.http.get<Hotel []>(this.url +`/hotels/`)
    .pipe(
      map((res: any[])=> {
        res.forEach((item: any) => {
          this.hotel = new Hotel();
          this.hotel.setValues(item);
          this.todosHoteles.push(this.hotel);
        });
        this.todosHoteles$.next(this.todosHoteles);
      })
    );
  }

  eliminar(id: string): Observable <any>{
    console.log(this.todosHoteles);
    return this.http.delete<Hotel []>(this.url +`/hotels/${id}`)
    .pipe(
      map((res: any)=> {
        console.log(res);
        // this.todosHoteles$.next(this.);
      })
    );
  }

  hotelPorAdministrador$(): Observable<Hotel []>{
    return this.hotelesPorAdministrador$.asObservable();
  }

  setHotelPorAdministrador(hoteles: Hotel []){
    this.hotelesPorAdministrador$.next(hoteles);
  }

  hotelPorAdministrador(idAdministrador: string): Observable <any> {
    this.hotelesPorAdministrador = [];
    return this.http.get<Hotel []>(this.url +`/hotels/administrador/${idAdministrador}`)
    .pipe(
      map((res: any[])=> {
        res.forEach((item: any) => {
          this.hotel = new Hotel();
          this.hotel.setValues(item);
          this.hotelesPorAdministrador.push(this.hotel);
        });
        this.hotelesPorAdministrador$.next(this.hotelesPorAdministrador);
      })
    );
  }
}
