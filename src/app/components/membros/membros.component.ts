import { Component, Input, OnInit } from '@angular/core';
import { DateService } from 'src/app/core/date/date.service';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
  @Input() membro: any;
  @Input() posicao: any;

  dataNascimento: string = '';

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.posicao = (this.posicao)+1
    
    this.converteDataNascimento();
  }

  converteDataNascimento() {
    this.membro.dataNascimento = this.dateService.formatarDataComBarra(this.membro.dataNascimento)
  }

}
