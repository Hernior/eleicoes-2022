import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  dataUrl = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<CrudService>(this.dataUrl);
  }
}
