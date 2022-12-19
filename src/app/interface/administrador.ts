export class Administrador{
    id: string;
    nombre_empresa: string;
    correo: string;
    telefono: number;
    usuarioId: string;

    setValues(administrador: Administrador){
        this.nombre_empresa = administrador.nombre_empresa;
        this.id= administrador.id;
        this.correo= administrador.correo;
        this.telefono= administrador.telefono;
        this.usuarioId= administrador.usuarioId;
    }
}
