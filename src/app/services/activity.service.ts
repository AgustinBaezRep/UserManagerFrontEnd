import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  url: string = `${environment.baseURL}/Activity`;
  constructor(private http: HttpClient) { }

  GetActivities(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
