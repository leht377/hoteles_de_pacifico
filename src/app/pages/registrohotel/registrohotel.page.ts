import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/interface/hotel';
import { HotelService } from '../../api/hotel.service';
import { UsuarioLogeadoService } from '../../api/usuario-logeado.service';
import { UsuarioLogeado } from '../../interface/usuarioLogeado';
@Component({
  selector: 'app-registrohotel',
  templateUrl: './registrohotel.page.html',
  styleUrls: ['./registrohotel.page.scss'],
})
export class RegistrohotelPage implements OnInit {

  public hotel = new Hotel();
  public usuarioLogeado = new UsuarioLogeado();
  public usuarioLogeadoSubcription = new Subscription();
  constructor(
    private hotelServicios: HotelService,
    private usuarioLogeadoServicios: UsuarioLogeadoService
    ) { }

  ngOnInit() {
    console.log('entro');
    this.usuarioLogeadoServicios.getdata().subscribe(res => {
      console.log(res);
    });
  }

  onCreate(){
    // this.hotel.administradorId = this.usuarioLogeado.id;
    // console.log(this.usuarioLogeado);
    // console.log(this.hotel);
    // this.hotelServicios.crear(this.hotel).subscribe(res => console.log(res));
  }

}
