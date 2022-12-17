export class UsuarioLogeado{
  correo: string;
  usuario: string;
  id: string;
  rol: string;

  setValues(usuario: UsuarioLogeado){
    this.id = usuario.id ;
    this.usuario= usuario.usuario;
    this.correo = usuario.correo;
    this.rol= usuario.rol;
  }
}
