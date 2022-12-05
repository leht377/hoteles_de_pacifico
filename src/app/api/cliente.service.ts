import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Usuario} from '../../interface/usuario';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(  private http = HttpClient;) {
    
   }


  create(usuario: Usuario){
    return  this.http. ()
  }
}
