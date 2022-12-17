import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../api/usuario.service';
import { Usuario} from '../../interface/usuario';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario = new Usuario ();
  public usuarioSubcription = new Subscription();

  constructor(
    private usuarioServicios: UsuarioService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLogin(){
   this.usuarioServicios.autenticar(this.usuario).subscribe();
   this.usuarioSubcription = this.usuarioServicios.autenticar$().subscribe((res) => {
    if (res.usuario === this.usuario.usuario && res.contrasena === this.usuario.contrasena){
        this.router.navigate(['/']);
      }
   });
  }

}
