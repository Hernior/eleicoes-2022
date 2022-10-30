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

  // Governador
  GovernadorDados = null;
  GovernadorPorcentagemTotal = null;
  GovernadorHoraAtualizacao = null;
  GovernadorVotosValidos = null;
  GovernadorVotosValidosPorcentagem = null;
  GovernadorVotosBranco = null;
  GovernadorVotosBrancoPorcentagem = null;
  GovernadorVotosNulo = null;
  GovernadorVotosNuloPorcentagem = null;

  constructor(public crud: CrudService) { }

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
        this.setPresidente(data);
      });
  }

  loadGovernador() {
    this.crud.getGovernador()
      .subscribe((data: any) => {
        console.log('getGovernador', data);
        this.setGovernador(data);
      });
  }

  setPresidente(data: any) {
    this.dadosPresidente = data?.cand;
    this.porcentagemTotal = data?.pst as any;
    this.horaAtualizacao = data?.ht as any;

    this.votosValidos = data?.vv as any;
    this.votosValidosPorcentagem = data?.pvvc as any;

    this.votosBranco = data?.vb as any;
    this.votosBrancoPorcentagem = data?.pvb as any;

    this.votosNulo = data?.vn as any;
    this.votosNuloPorcentagem = data?.ptvn as any;
  }

  setGovernador(data: any) {
    this.dadosGovernador = data?.cand;
    this.GovernadorPorcentagemTotal = data?.pst as any;
    this.GovernadorHoraAtualizacao = data?.ht as any;

    this.GovernadorVotosValidos = data?.vv as any;
    this.GovernadorVotosValidosPorcentagem = data?.pvvc as any;

    this.GovernadorVotosBranco = data?.vb as any;
    this.GovernadorVotosBrancoPorcentagem = data?.pvb as any;

    this.GovernadorVotosNulo = data?.vn as any;
    this.GovernadorVotosNuloPorcentagem = data?.ptvn as any;
  }
}