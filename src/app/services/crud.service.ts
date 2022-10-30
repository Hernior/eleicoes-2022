import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private urlPresidente1T = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json';

  private urlPresidente2T = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json';
  private urlGovernador2T = 'https://resultados.tse.jus.br/oficial/ele2022/547/dados-simplificados/al/al-c0003-e000547-r.json';

  constructor(private http: HttpClient) { }

  getPresidente() {
    return this.http.get<CrudService>(this.urlPresidente2T);
  }

  getGovernador() {
    return this.http.get<CrudService>(this.urlGovernador2T);
  }
}
