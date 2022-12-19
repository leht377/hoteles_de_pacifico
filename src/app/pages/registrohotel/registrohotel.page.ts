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
  private listaHoteles: Hotel [] = [];

  constructor(
    private hotelServicios: HotelService,
    private usuarioLogeadoServicios: UsuarioLogeadoService
    ) { }

  ngOnInit() {
    this.usuarioLogeadoSubcription = this.usuarioLogeadoServicios.get$().subscribe(res =>  {
      this.usuarioLogeado.setValues(res);
    });

    this.usuarioLogeadoServicios.get();


    this.hotelServicios.hotelPorAdministrador$().subscribe((hotel: [])=> {
      this.listaHoteles = hotel;
    });

    this.hotelServicios.hotelPorAdministrador( this.usuarioLogeado.id).subscribe((res)=>{
      console.log('cargando.....');
    });
  }

  onCreate(){
    //console.log(this.usuarioLogeadoServicios.get$().subscribe((res) => console.log(res)));
    // this.hotel.administradorId = this.usuarioLogeado.id;
    // console.log(this.usuarioLogeado);
      this.hotel.administradorId = this.usuarioLogeado.id;
      this.hotelServicios.crear(this.hotel).subscribe((res: Hotel) => {
        this.listaHoteles.push(res);
        this.hotelServicios.setHotelPorAdministrador(this.listaHoteles);
      });
  }

}
