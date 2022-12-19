export class Hotel {
    id?: string;
    nit: number;
    nombre: string;
    direccion: string;
    telefono: string;
    administradorId: string;
    descripcion: string;
    foto: string;
    calificacion?: number;

  setValues(hotel: Hotel){
    this.id = hotel.id;
    this.nit = hotel.nit;
    this.nombre =  hotel.nombre;
    this.direccion =  hotel.direccion;
    this.telefono =  hotel.telefono;
    this.administradorId =  hotel.administradorId;
    this.descripcion =  hotel.descripcion;
    this.foto =  hotel.foto;
    this.calificacion = hotel.calificacion || 0;
  }
}
