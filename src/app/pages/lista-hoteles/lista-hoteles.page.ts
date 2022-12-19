import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interface/hotel';
import { HotelService } from '../../api/hotel.service';


@Component({
  selector: 'app-lista-hoteles',
  templateUrl: './lista-hoteles.page.html',
  styleUrls: ['./lista-hoteles.page.scss'],
})
export class ListaHotelesPage implements OnInit {
  public listaHoteles: Hotel [] = [];
  constructor( private hotelServicios: HotelService) { }

  ngOnInit() {
    this.hotelServicios.getAll$().subscribe((hotel: [])=> {
      this.listaHoteles = hotel;
      console.log(this.listaHoteles);
    });

    this.hotelServicios.getAll().subscribe((res)=>{
      console.log('cargando.....');
    });
  }

}
