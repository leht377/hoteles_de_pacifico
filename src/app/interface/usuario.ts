export class Usuario{
    id?: string;
    usuario: string;
    contrasena: string;
    rol: string;

    setValues(usuario: Usuario){
      this.id = usuario.id ;
      this.usuario= usuario.usuario;
      this.contrasena= usuario.contrasena;
      this.rol= usuario.rol;
    }

}

