import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string;
  constructor(
    private http: HttpClient) {
    this.api = environment.apiURL + '/user'
  }


  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.api)
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.api}+${id}`)
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.api}+${id}`)
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.api}+${user.id}`, user)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user)
  }

}
