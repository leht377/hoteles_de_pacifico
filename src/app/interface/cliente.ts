export class Cliente {
    id?: string;
    cedula: number;
    nombre: string;
    correo: string;
    telefono: number;
    usuarioId?: number;


    setValues(cliente: Cliente){
        this.cedula= cliente.cedula;
        this.id= cliente.id;
        this.nombre= cliente.nombre;
        this.correo= cliente.correo;
        this.telefono= cliente.telefono;
        this.usuarioId= cliente.usuarioId;
    }
};
