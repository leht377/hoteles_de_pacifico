import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  constructor(private hotelServicios: HotelService) { }

  ngOnInit() {
    this.hotelSubscripcion = this.hotelServicios.hotelPorAdministrador$().subscribe((res: [])=> {
      this.hoteles = res;
      console.log(res);
    });

    this.hotelServicios.hotelPorAdministrador('639cdca7a414542fc09857b6').subscribe((res)=>{
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
