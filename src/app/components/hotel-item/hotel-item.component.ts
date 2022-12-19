import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interface/hotel';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss'],
})
export class HotelItemComponent implements OnInit {
  @Input() hotel: Hotel;
  constructor() { }

  ngOnInit() {
    console.log(this.hotel.nombre);
  }

}
