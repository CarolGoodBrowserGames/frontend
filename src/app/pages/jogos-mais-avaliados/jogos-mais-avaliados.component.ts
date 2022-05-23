import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { DateService } from 'src/app/core/date/date.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-jogos-mais-avaliados',
  templateUrl: './jogos-mais-avaliados.component.html',
  styleUrls: ['./jogos-mais-avaliados.component.css']
})
export class JogosMaisAvaliadosComponent implements OnInit {

  listaJogos: any = [];

  usuario: Usuario = {
    nome: '',
    userName: '',
    senha: '',
    dataNascimento: '',
    estado: '',
    pais: '',
    email: '',
    ehAdmin: 'false'
  };

  constructor(
    private authGuard: AuthGuard,
    private dateService: DateService,
    private utilService: UtilService
    ) { }

  ngOnInit(): void {
    this.getListaJogos();
    this.usuario  = this.authGuard.getUsuario();  
    this.usuario.dataNascimento = this.dateService.formatarDataComBarra(this.usuario.dataNascimento)
  }

  verificaLista() {
    return this.listaJogos.length > 0;
  }

  getListaJogos() {
    this.utilService.listar().subscribe(
      (result) => {
        console.log(result);  
        this.listaJogos = result;      
      }, (error) => {
        console.log(error);        
      }
    )
  }


}
