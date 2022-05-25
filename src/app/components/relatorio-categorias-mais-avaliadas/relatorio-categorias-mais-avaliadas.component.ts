import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'app-relatorio-categorias-mais-avaliadas',
  templateUrl: './relatorio-categorias-mais-avaliadas.component.html',
  styleUrls: ['./relatorio-categorias-mais-avaliadas.component.css']
})
export class RelatorioCategoriasMaisAvaliadasComponent implements OnInit {

  listaCategorias: any[] = [];

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaCategorias();
  }

  getListaCategorias() {
    this.jogoService.buscarPorMelhoresCategorias().subscribe(
      (result) => {
        this.listaCategorias = result;
      }, (error) => {
        console.log(error);
      }
    )
  }
}
