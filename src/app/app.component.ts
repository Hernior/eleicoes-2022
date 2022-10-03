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
  dataSource = TABELA_DADOS;

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
    this.loadData();
  }

  loadData() {
    this.crud.getData()
    .subscribe((data: any) => {
      this.dataSource = data?.cand;
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
}