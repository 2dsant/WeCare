import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projeto } from '../interface/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private http: HttpClient) { }

  getAllProjetos() {
    return this.http.get<Projeto[]>(`${environment.urlRequest}projetos`).toPromise();
  }

  saveProjeto(form: Projeto) {
    return this.http.post<Projeto>(`${environment.urlRequest}projetos`, form).toPromise();
  }
  
  getOneProjeto(id: number) {
    return this.http.get<Projeto>(`${environment.urlRequest}projetos/${id}`).toPromise();
  }

  getProjetosFake(){
    return this.http.get('https://picsum.photos/v2/list').toPromise();
  }

  getCommentsFake(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments').toPromise()
  }

  getUserFake(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise()
  }

  getForumFake(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise()
  }

  
}
