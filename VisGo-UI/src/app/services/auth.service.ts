import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/user'
  GetAll(){
    return this.http.get(this.apiurl)
  }

  GetbyId(id:any){
    return this.http.get(`${this.apiurl}/${id}`)
  }

  Register(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

  Updateuser(inputdata:any, id:any){
    return this.http.put(`${this.apiurl}/${id}`,inputdata)
  }
}
