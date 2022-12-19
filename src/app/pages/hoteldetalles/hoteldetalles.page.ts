import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/interface/hotel';

import { HotelService } from 'src/app/api/hotel.service';

@Component({
  selector: 'app-hoteldetalles',
  templateUrl: './hoteldetalles.page.html',
  styleUrls: ['./hoteldetalles.page.scss'],
})
export class HoteldetallesPage implements OnInit {
  public hotel = new Hotel();
  private id: string;
  constructor(
    private route: ActivatedRoute,
    private hotelServicios: HotelService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.hotelServicios.getOne(this.id).subscribe(res => {
      this.hotel.setValues(res);
    });
  }

}
