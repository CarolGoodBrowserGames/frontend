import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { DateService } from 'src/app/core/date/date.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { AvaliacaoService } from 'src/app/services/avaliacao/avaliacao.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ver-avaliacoes',
  templateUrl: './ver-avaliacoes.component.html',
  styleUrls: ['./ver-avaliacoes.component.css']
})
export class VerAvaliacoesComponent implements OnInit {
  listaAvaliacao: any = [];

  payload = {
    nota: 0,
    jogo: {},
    usuario: {}
  }

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
    private router: ActivatedRoute,
    private avaliacaoService: AvaliacaoService,
  ) { }

  ngAfterContentInit() {
    this.listarPorIdJogo();
  }

  verificaLista() {
    return this.listaAvaliacao.length > 0;
  }

  ngOnInit(): void {
    this.usuario  = this.authGuard.getUsuario();  
    this.usuario.dataNascimento = this.dateService.formatarDataComBarra(this.usuario.dataNascimento)
  }

  listarPorIdJogo() {
    var id: any = this.router.snapshot.paramMap.get('id');
    this.avaliacaoService.listarPorIdJogo(id).subscribe(
      (result) => {  
        this.listaAvaliacao = result;  
      }, (error) => {
        console.log(error);        
      }
    )
  }

  

}
