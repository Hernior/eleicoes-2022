import { Component, OnInit } from '@angular/core';
import { CrudService } from './services/crud.service';

export interface TabelaElementos {
  nm: string; // name
  n: string; // numero
  pvap: string; // porcentagem
  vap: string; // votos
}

const TABELA_DADOS: TabelaElementos[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eleicoes-2022';
  TabelaColunas: string[] = ['nome', 'numero', 'porcentagem', 'votos'];
  dadosPresidente = TABELA_DADOS;
  dadosGovernador = TABELA_DADOS;

  porcentagemTotal = null;
  horaAtualizacao = null;
  votosValidos = null;
  votosValidosPorcentagem = null;

  votosBranco = null;
  votosBrancoPorcentagem = null;
  votosNulo = null;
  votosNuloPorcentagem = null;

  constructor(public crud: CrudService) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.loadPresidente();
    this.loadGovernador();
  }

  loadPresidente() {
    this.crud.getPresidente()
    .subscribe((data: any) => {
      console.log('getPresidente', data);
      
      this.dadosPresidente = data?.cand;
      this.porcentagemTotal = data?.pst;
      this.horaAtualizacao = data?.ht;

      this.votosValidos = data?.vv
      this.votosValidosPorcentagem = data?.pvvc

      this.votosBranco = data?.vb;
      this.votosBrancoPorcentagem = data?.pvb;

      this.votosNulo = data?.vn;
      this.votosNuloPorcentagem = data?.ptvn;

    });
  }

  loadGovernador() {
    this.crud.getGovernador()
    .subscribe((data: any) => {
      console.log('getGovernador', data);
      
      // this.dadosPresidente = data?.cand;
      // this.porcentagemTotal = data?.pst;
      // this.horaAtualizacao = data?.ht;

      // this.votosValidos = data?.vv
      // this.votosValidosPorcentagem = data?.pvvc

      // this.votosBranco = data?.vb;
      // this.votosBrancoPorcentagem = data?.pvb;

      // this.votosNulo = data?.vn;
      // this.votosNuloPorcentagem = data?.ptvn;

    });
  }
}