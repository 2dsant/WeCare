import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private http: HttpClient) { }

  buscaCep(cep: string) {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).toPromise();
  }
}
