import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  url: string = "https://localhost:44383/api/Activity"
  constructor(private http: HttpClient) { }

  GetActivities(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
