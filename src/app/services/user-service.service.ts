import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/userDTO';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserViewModel } from '../models/userViewModel';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url: string = `${environment.baseURL}/User`;
  constructor(private http: HttpClient) { }

  GetUsers(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  CreateUser(user: UserViewModel): Observable<any> {
    return this.http.post<any>(`${this.url}/CreateUser`, user)
  }

  UpdateUser(user: UserViewModel): Observable<any> {
    return this.http.put<any>(`${this.url}/UpdateUser`, user)
  }

  RemoveUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/DeleteUser/${id}`)
  }

  GetCountries(): Observable<any> {
    return this.http.get<any>(`${this.url}/GetCountries`);
  }
}
