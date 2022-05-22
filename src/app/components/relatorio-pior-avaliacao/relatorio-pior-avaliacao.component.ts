import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-relatorio-pior-avaliacao',
  templateUrl: './relatorio-pior-avaliacao.component.html',
  styleUrls: ['./relatorio-pior-avaliacao.component.css']
})
export class RelatorioPiorAvaliacaoComponent implements OnInit {

  listaJogos: any = []

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  getListaJogos() {
    this.jogoService.buscarQtdAvaliacao().subscribe(
      (result) => {        
        this.listaJogos = result.length > 5 ? result.slice(0,5) : result  
      }, (error) => {
        console.log(error);        
      }
    )
  }

  verificaLista(){
    return this.listaJogos.length > 0
  }

}
