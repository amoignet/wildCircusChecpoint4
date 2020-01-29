import { UserClass } from './../models/user-class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  static URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(ReservationService.URL);
  }

  postAUser(user: UserClass): Observable<any> {
    return this.http.post(ReservationService.URL, user);
  }

  deleteAUser(id: number): Observable<any> {
    return this.http.delete(ReservationService.URL + '/' + id);
  }
}
