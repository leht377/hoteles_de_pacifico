import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ClienteService } from '../../api/cliente.service';
import { UsuarioService } from '../../api/usuario.service';
import { Cliente} from '../../interface/cliente';
import { Usuario} from '../../interface/usuario';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.page.html',
  styleUrls: ['./registrocliente.page.scss'],
})
export class RegistroclientePage implements OnInit {
  public cliente = new Cliente ();
  public usuario = new Usuario ();
  private rcliente: FormGroup;

  constructor(
    private clienteServicios: ClienteService,
    private usuarioServicios: UsuarioService,
    private formBuilder: FormBuilder

  ) {
     this.rcliente = this.formBuilder.group({
      nombre:['', [Validators.required, Validators.minLength(4),Validators.maxLength(10)]],
      correo:['',Validators.required, Validators.minLength(4),Validators.maxLength(10)],
      telefono:['', Validators.required,Validators.minLength(4),Validators.maxLength(10)],
      cedula:['', Validators.required,Validators.minLength(4),Validators.maxLength(10)],
      
     });

   }

  ngOnInit() {
    this.usuario.rol = 'cliente';
  }

  onCreate(){
    //console.log(this.rcliente.value);
    this.usuarioServicios.crear(this.usuario).subscribe((usuario) => {
      this.cliente.usuarioId = usuario.id;
      this.clienteServicios.crear(this.cliente).subscribe((cliente) => console.log(cliente));
    });
  }
}
