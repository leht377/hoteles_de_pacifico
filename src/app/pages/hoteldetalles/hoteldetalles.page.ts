import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hoteldetalles',
  templateUrl: './hoteldetalles.page.html',
  styleUrls: ['./hoteldetalles.page.scss'],
})
export class HoteldetallesPage implements OnInit {

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

}
