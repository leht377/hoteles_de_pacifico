import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/api/hotel.service';

@Component({
  selector: 'app-editar-hotel',
  templateUrl: './editar-hotel.page.html',
  styleUrls: ['./editar-hotel.page.scss'],
})
export class EditarHotelPage implements OnInit {
  public hotel = new Hotel();
  private id: string;
  constructor(private rutaActiva: ActivatedRoute,private hotelServicios: HotelService) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
    this.hotelServicios.getOne( this.id).subscribe(res => {
      this.hotel.setValues(res);
    });
  }
  onUpdate(){
    console.log('update');
    console.log( this.id);
    this.hotelServicios.update(this.hotel).subscribe(res => console.log(res));
    this.hotelServicios.hotelPorAdministrador(this.hotel.administradorId).subscribe();
  }
}
