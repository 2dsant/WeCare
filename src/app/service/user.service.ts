import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(`${environment.urlRequest}users`).toPromise();
  }

  saveUser(form: User) {
    return this.http.post<User>(`${environment.urlRequest}users`, form).toPromise();
  }
  
  getOneUser(id: number) {
    return this.http.get<any>(`${environment.urlRequest}users/${id}`).toPromise();
  }
}
