import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioLogeadoService } from 'src/app/api/usuario-logeado.service';
import { UsuarioLogeado } from 'src/app/interface/usuarioLogeado';
import { HotelService } from '../../api/hotel.service';
import { Hotel } from '../../interface/hotel';
@Component({
  selector: 'app-administrar-hoteles',
  templateUrl: './administrar-hoteles.page.html',
  styleUrls: ['./administrar-hoteles.page.scss'],
})
export class AdministrarHotelesPage implements OnInit {
  public hoteles: Hotel [] = [];
  public hotelSubscripcion = new Subscription();
  public usuarioLogeadoSubscripcion = new Subscription();
  public usuarioLogeado = new UsuarioLogeado();

  constructor(private hotelServicios: HotelService, private usuarioLogeadoServicios: UsuarioLogeadoService) { }

  ngOnInit() {

    this.usuarioLogeadoSubscripcion = this.usuarioLogeadoServicios.get$().subscribe(res =>  {
      this.usuarioLogeado.setValues(res);
    });

    this.usuarioLogeadoServicios.get();


    this.hotelSubscripcion = this.hotelServicios.hotelPorAdministrador$().subscribe((res: [])=> {
      this.hoteles = res;

    });

    this.hotelServicios.hotelPorAdministrador( this.usuarioLogeado.id).subscribe((res)=>{
      console.log('cargando.....');
    });
  }

  eleminarHotel(id: string){
   this.hotelServicios.eliminar(id).subscribe(res => {
     const nuevosHoteles = this.hoteles.filter(hotel => hotel.id !== id);
    this.hotelServicios.setHotelPorAdministrador(nuevosHoteles);
   });
  }
}
