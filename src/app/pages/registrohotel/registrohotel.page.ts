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
    // console.log('entro');
    // console.log(this.usuarioLogeadoServicios.get$().subscribe(res => console.log(res)));
    //console.log(this.usuarioLogeado);

    this.hotelServicios.hotelPorAdministrador$().subscribe((hotel: [])=> {
      this.listaHoteles = hotel;
    });

    this.hotelServicios.hotelPorAdministrador('639cdca7a414542fc09857b6').subscribe((res)=>{
      console.log('cargando.....');
    });
  }

  onCreate(){
    //console.log(this.usuarioLogeadoServicios.get$().subscribe((res) => console.log(res)));
    // this.hotel.administradorId = this.usuarioLogeado.id;
    // console.log(this.usuarioLogeado);
      this.hotel.administradorId = '639cdca7a414542fc09857b6';
      this.hotelServicios.crear(this.hotel).subscribe((res: Hotel) => {
        this.listaHoteles.push(res);
        this.hotelServicios.setHotelPorAdministrador(this.listaHoteles);
      });
  }

}
