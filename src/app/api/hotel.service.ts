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
  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  crear(hotel: Hotel){
    return this.http.post<Hotel>(this.url + '/hotels',hotel)
    .pipe(
      map((hotelCreado: any) => hotelCreado),
      catchError((error)=> of(error))
    );
  }
}
