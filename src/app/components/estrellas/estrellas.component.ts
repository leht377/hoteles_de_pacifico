import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.scss'],
})
export class EstrellasComponent implements OnInit {

  @Input() calificacion: number;

  public lista  = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
    console.log(this.calificacion);
  }

}
