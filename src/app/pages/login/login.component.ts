import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidService } from 'src/app/core/valid/valid.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario: Usuario = {
    nome: '',
    userName: '',
    senha: '',
    dataNascimento: '',
    estado: '',
    pais: '',
    email: '',
    ehAdmin: ''
  }
  logando: boolean = true;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private validService: ValidService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.logando = false;
    this.usuarioService.login(this.usuario).subscribe(
      (result) => {
        if (result) {
          localStorage.setItem('usuario', JSON.stringify(result))
          this.router.navigate(['']);
          this.logando = true;
        } else {
          this.toastr.error('Email ou senhas inválidos.')
          this.logando = true;
        }
      }, (error) => {
        this.toastr.error('Email ou senhas inválidos.')
        console.log(error); 
      }
    )
  }

  validaUsuario() {
    return this.validService.validaCampos({email: this.usuario.email, senha: this.usuario.senha})
  }

}
