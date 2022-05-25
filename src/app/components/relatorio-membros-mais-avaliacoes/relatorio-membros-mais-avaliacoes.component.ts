import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-relatorio-membros-mais-avaliacoes',
  templateUrl: './relatorio-membros-mais-avaliacoes.component.html',
  styleUrls: ['./relatorio-membros-mais-avaliacoes.component.css']
})
export class RelatorioMembrosMaisAvaliacoesComponent implements OnInit {
  lista: any = [];

  constructor(
    private jogoService: JogoService,
  ) { }

  ngOnInit(): void {
    this.getMembros();
  }

  getMembros() {
    this.jogoService.buscarMembrosMaiorNumeroAvaliacao().subscribe(
      (result)=> {
        //console.log(result);    
        this.lista = result;    
      }, (error) => {
        console.log(error);
        
      }
    )
  }

  verificaLista() {
    return this.lista.length > 0;
  }

}
