import { Component ,OnInit} from '@angular/core';
import { UsuarioService } from './api/usuario.service';
import { Cliente } from './interface/cliente';
import { Usuario } from './interface/usuario';
import { ClienteService } from './api/cliente.service';
import { AdministradorService } from './api/administrador.service';
import { UsuarioLogeadoService } from './api/usuario-logeado.service';
import { UsuarioLogeado } from './interface/usuarioLogeado';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{

  public usuariologeado = new UsuarioLogeado();

  public cliente = new Cliente();
  public appPages = [
    { title: 'Hoteles', url: '/pages/lista-hoteles', icon: 'bed' },
    { title: 'Iniciar sesion', url: '/pages/login', icon: 'log-in' },
    { title: 'Registar', url: '/pages/opcionderegistro', icon: 'add-circle' },
  ];
  constructor(
    private usuarioServicios: UsuarioService,
    private clienteServicios: ClienteService,
    private administradorServicios: AdministradorService,
    private usuarioLogeadoServicios: UsuarioLogeadoService
    ) {}

  ngOnInit() {
    this.usuarioServicios.autenticar$().subscribe((usuario) => {
      if(usuario){
        this.appPages.pop();
        this.appPages.pop();

        if(usuario.rol === 'administrador'){
          this.appPages.push({ title: 'Administrar Hotel', url: '/pages/administrar-hoteles', icon: 'clipboard' });
          this.administradorServicios.obtener(usuario.id).subscribe(administrador=>{
            this.usuariologeado.setValues({...administrador,rol:usuario.rol, usuario: usuario.usuario});
            this.usuarioLogeadoServicios.set(this.usuariologeado);
          });
        }

        if(usuario.rol === 'cliente'){
          this.clienteServicios.obtener(usuario.id).subscribe(cliente => {
            this.usuariologeado.setValues({...cliente,rol:usuario.rol, usuario: usuario.usuario});
            this.usuarioLogeadoServicios.set(this.usuariologeado);
          });

        }

        this.appPages.push({ title: 'Cerrar sesión', url: '/folder/Spam', icon: 'exit' });


      }

    });



  }
}
