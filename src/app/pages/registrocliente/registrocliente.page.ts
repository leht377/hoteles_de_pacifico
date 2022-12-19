import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../api/cliente.service';
import { UsuarioService } from '../../api/usuario.service';
import { Cliente} from '../../interface/cliente';
import { Usuario} from '../../interface/usuario';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Hotel } from 'src/app/interface/hotel';


@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.page.html',
  styleUrls: ['./registrocliente.page.scss'],
})
export class RegistroclientePage implements OnInit {
  public cliente = new Cliente ();
  public usuario = new Usuario ();





 public formulario: FormGroup;

  constructor(
    private clienteServicios: ClienteService,
    private usuarioServicios: UsuarioService,
    public registroFb:  FormBuilder
  ) {
    this.formulario = this.registroFb.group({
      nombre: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      correo: new FormControl('',[Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]),
      telefono: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      cedula: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      usuario  : new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)])
  });


  }

  ngOnInit() {
    this.usuario.rol = 'cliente';
    // this.registrocliente= this.createFormGroup();

  }

  // onResetForm() {
  //   this.registrocliente.reset();
  // }

   onCreate(){
   this.cliente.setValues(this.formulario.value);
   console.log(this.cliente);
   this.usuario.setValues(this.formulario.value);
   console.log(this.cliente);
      this.usuarioServicios.crear(this.usuario).subscribe((usuario) => {
        this.cliente.usuarioId = usuario.id;
      this.clienteServicios.crear(this.cliente).subscribe((cliente) => console.log(cliente));
       });
   }

   //get nombre(){ return this.formulario.get('nombre')}
  // get correo(){ return this.registrocliente.get('correo')}
  // get telefono(){ return this.registrocliente.get('telefono')}
  // get cedula(){ return this.registrocliente.get('cedula')}

}
