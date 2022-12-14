import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../api/cliente.service';
import { UsuarioService } from '../../api/usuario.service';
import { Cliente} from '../../interface/cliente';
import { Usuario} from '../../interface/usuario';
@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.page.html',
  styleUrls: ['./registrocliente.page.scss'],
})
export class RegistroclientePage implements OnInit {
  public cliente = new Cliente ();
  public usuario = new Usuario ();

  constructor(
    private clienteServicios: ClienteService,
    private usuarioServicios: UsuarioService

  ) { }

  ngOnInit() {
    this.usuario.rol = 'cliente';
  }

  onCreate(){
    this.usuarioServicios.crear(this.usuario).subscribe((usuario) => {
      this.cliente.usuarioId = usuario.id;
      this.clienteServicios.crear(this.cliente).subscribe((cliente) => console.log(cliente));
    });
  }
}
