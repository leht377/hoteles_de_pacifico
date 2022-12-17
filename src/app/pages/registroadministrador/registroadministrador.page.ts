import { Component, OnInit } from '@angular/core';

import { AdministradorService } from '../../api/administrador.service';
import { UsuarioService } from '../../api/usuario.service';
import { Administrador} from '../../interface/administrador';
import { Usuario} from '../../interface/usuario';

@Component({
  selector: 'app-registroadministrador',
  templateUrl: './registroadministrador.page.html',
  styleUrls: ['./registroadministrador.page.scss'],
})
export class RegistroadministradorPage implements OnInit {

  public administrador = new Administrador ();
  public usuario = new Usuario ();
  
  constructor(
  private  administradorService :AdministradorService,
  private usuarioService : UsuarioService

  ) { }

  ngOnInit() {
    this.usuario.rol = 'administrador';
     }

     onCreate(){   
     this.usuarioService.crear(this.usuario).subscribe((usuario)=>{ 
    this.administrador.usuario_id = usuario.id;
    this.administradorService.crear(this.administrador).subscribe((administrador) => console.log(administrador));
    });
  }
}
