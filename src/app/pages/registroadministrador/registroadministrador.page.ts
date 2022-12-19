 import { Component, OnInit } from '@angular/core';

 import { AdministradorService } from '../../api/administrador.service';
 import { UsuarioService } from '../../api/usuario.service';
 import { Administrador} from '../../interface/administrador';
 import { Usuario} from '../../interface/usuario';
 import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

 @Component({
   selector: 'app-registroadministrador',
   templateUrl: './registroadministrador.page.html',
   styleUrls: ['./registroadministrador.page.scss'],
 })
 export class RegistroadministradorPage implements OnInit {

   public administrador = new Administrador ();
   public usuario = new Usuario ();


   public formulario: FormGroup;

   constructor(
  private  administradorService: AdministradorService,
  private usuarioServicios: UsuarioService,
  public registroAdminFb:  FormBuilder

  ) {

    this.formulario = this.registroAdminFb.group({
      nombre_empresa: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(30)]),
      correo: new FormControl('',[Validators.required, Validators.minLength(4),
        Validators.maxLength(20)]),
      telefono: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      usuario  : new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(10)])
  });

   }

 ngOnInit() {
   this.usuario.rol = 'administrador';
    }


  onCreate(){
      this.administrador.setValues(this.formulario.value)
      console.log(this.administrador)
     this.usuario.setValues(this.formulario.value)
      console.log(this.administrador)
         this.usuarioServicios.crear(this.usuario).subscribe((usuario) => {
           this.administrador.usuarioId = usuario.id;
         this.administradorService.crear(this.administrador).subscribe((administrador) => console.log(administrador));
          });
      }   
}
