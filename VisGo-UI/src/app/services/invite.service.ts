import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private _http: HttpClient) { }
  apiurl='http://localhost:3000/invites'

  addInvites(data: any):Observable<any>{
    return this._http.post(this.apiurl, data)
  }

  getInvites():Observable<any>{
    return this._http.get(this.apiurl)
  }

  deleteInvite(id: number):Observable<any>{
    return this._http.delete(`${this.apiurl}/${id}`)
  }

  getInvitebyId(id: number):Observable<any>{
    return this._http.get(`${this.apiurl}/${id}`)
  }

  dataById: any; 
}
