import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl : string;

  user: User;
  constructor(private httpClient: HttpClient) {
    this.apiurl = environment.apiUrl +'/user';
  }

  getAllUser(): Observable<User>{
    return this.httpClient.get<User>(this.apiurl)
  }

  GetUser(id: number) {
      return this.httpClient.get<User>(`$(this.apiurl)/$(id)`)
  }

  deteletUser(id ?: number){
     return this.httpClient.delete(`$(this.apiurl)/$(id)`)
  }

  updateUser(user:User){
    return this.httpClient.put(`$(this.apiurl)/$(id)`, user)
  }

  addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiurl, user)
  }
}
