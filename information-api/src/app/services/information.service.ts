
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


export interface Infor {
  id ?: number;
  firstName : string;
  lastName : string;
  email : string;
  mobileNumber : number
}


@Injectable({
  providedIn: 'root'
})
export class InformationService {
  query(arg0: { page: number; size: number | undefined; }) {
    throw new Error('Method not implemented.');
  }
  private api : string;
  constructor(private http: HttpClient) {
    this.api = environment.APIUrl + '/information';
  }


  getAllInfor() : Observable<Infor[]>{
    return this.http.get<Infor[]>(this.api)
  }


  getInforByID(id: number){
    return this.http.get<Infor>(`${this.api}/${id}`)
  }


  addInfor( infor : Infor): Observable<Infor>{
    return this.http.post<Infor>(this.api, infor)
  }

  deleteInfor(id: number){
      return this.http.delete(`${this.api}/${id}`)
  }

  updateInfor( infor: Infor){
    return this.http.put(`${this.api}/${infor.id}`, infor)
  }
}
