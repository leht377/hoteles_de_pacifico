import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ClienteService } from '../../api/cliente.service';
import { UsuarioService } from '../../api/usuario.service';
import { Cliente} from '../../interface/cliente';
import { Usuario} from '../../interface/usuario';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.page.html',
  styleUrls: ['./registrocliente.page.scss'],
})
export class RegistroclientePage implements OnInit {
  public cliente = new Cliente ();
  public usuario = new Usuario ();
  
  private PURE_EMAIL_REGEXP = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';






  // createFormGroup (){
  //  return new FormGroup({
  //   nombre: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
  //   correo: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10), Validators.pattern(this.PURE_EMAIL_REGEXP)]),
  //   telefono: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
  //   cedula: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)])
  
  // });
  

  // }
  //  public registrocliente: FormGroup;

formulario:FormGroup;  
  constructor(
    private clienteServicios: ClienteService,
    private usuarioServicios: UsuarioService,

     public registroFb:  FormBuilder

  ) {
this.formulario = this.registroFb.group({

  nombre: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
  correo: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10), Validators.pattern(this.PURE_EMAIL_REGEXP)]),
     telefono: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
     cedula: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)])
});
    // this.registrocliente = this.createFormGroup();

    
  }

  ngOnInit() {
    this.usuario.rol = 'cliente';
    // this.registrocliente= this.createFormGroup();
  }

  // onResetForm() {
  //   this.registrocliente.reset(); 
  // }

   onCreate(){
    // this.registrocliente.get
     this.usuarioServicios.crear(this.usuario).subscribe((usuario) => {
       this.cliente.usuarioId = usuario.id;
       this.clienteServicios.crear(this.cliente).subscribe((cliente) => console.log(cliente));
     });
   }

   get nombre(){ return this.formulario.get('nombre')}
  // get correo(){ return this.registrocliente.get('correo')}
  // get telefono(){ return this.registrocliente.get('telefono')}
  // get cedula(){ return this.registrocliente.get('cedula')}
  
  
}
