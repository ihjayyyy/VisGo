import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/Host';
  userID = sessionStorage.getItem('username');
  accType = sessionStorage.getItem('accountType')
  userData:any;
  inviteData:any;
  logbookData:any;

  // GetAll(){
  //   return this.http.get(this.apiurl)
  // }

  GetDatabyId(id:any){
    return this.http.get(`${this.apiurl}/${id}`).pipe(
      map((response: any) => {
        if (!response) {
          throw new Error('Data not found');
        }
        return response;
      }),
      catchError((error: any) => {
        throw new Error('Error occurred while fetching data');
      })
    );
  }

  Register(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

  Updateuser(inputdata:any, id:any){
    return this.http.put(`${this.apiurl}/${id}`,inputdata)
  }

  AddInviteToUser(invite: any, username: any) {
    return this.GetDatabyId(username).pipe(
      switchMap((user: any) => {
        if (user && user.Invites) {
          const maxId = user.Invites.reduce((max: number, curr: any) => Math.max(max, curr.id), 0);
          invite.id = maxId + 1;
          user.Invites.push(invite);
          return this.Updateuser(user, username);
        } else {
          throw new Error('User not found or Invites array not available.');
        }
      })
    );
  }

  DeleteInvite(inviteId: number, username: any) {
    return this.GetDatabyId(username).pipe(
      switchMap((user: any) => {
        if (user && user.Invites) {
          const inviteIndex = user.Invites.findIndex((invite: any) => invite.id === inviteId);
          if (inviteIndex !== -1) {
            user.Invites.splice(inviteIndex, 1);
            return this.Updateuser(user, username);
          } else {
            throw new Error('Invite not found.');
          }
        } else {
          throw new Error('User not found or Invites array not available.');
        }
      })
    );
  }

  updateLogbook(logbook: any) {
    const logbookId = logbook.id;
  
    return this.GetDatabyId(this.userID).pipe(
      switchMap((user: any) => {
        if (user && user.Logbook) {
          const logbookIndex = user.Logbook.findIndex((log: any) => log.id === logbookId);
          if (logbookIndex !== -1) {
            user.Logbook[logbookIndex].dci = logbook.dci;
            user.Logbook[logbookIndex].timeIn = logbook.timeIn;
            user.Logbook[logbookIndex].dco = logbook.dci;
            user.Logbook[logbookIndex].timeOut = logbook.timeOut;
            return this.Updateuser(user, this.userID).pipe(
              catchError((error: any) => {
                console.error(error);
                return throwError('Error occurred while updating user data');
              })
            );
          } else {
            throw new Error('Logbook not found.');
          }
        } else {
          throw new Error('User not found or Logbook array not available.');
        }
      })
    );
  }
  

  SetInviteDatabyId(data: any) {
    this.inviteData = data;
  }

  PassInviteDatabyId() {
    return this.inviteData;
  }

  SetLogbookDatabyId(data: any) {
    this.logbookData = data;
  }

  PassLogbookDatabyId() {
    return this.logbookData;
  }

}
