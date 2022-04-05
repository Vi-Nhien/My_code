import { Observable } from 'rxjs';
import { ListSchema } from './list-schema';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListSchemaService {

  private apiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiURL + '/list-kanban';
  }

  getAllList(): Observable<ListSchema[]>{
    return this.http.get<ListSchema[]>(this.apiUrl)
  }

  getListById(id: string){
      return this.http.get<ListSchema>(`${this.apiUrl}/${id}`)
  }

  addList( ListSchema : ListSchema){
    return this.http.post(this.apiUrl, ListSchema)
  }



}
