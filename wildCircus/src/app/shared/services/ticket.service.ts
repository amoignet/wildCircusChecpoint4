import { TicketClass } from './../models/ticket-class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  static URL = 'http://localhost:3000/tickets';

  constructor(private http: HttpClient) { }

  getTicket(): Observable<any> {
    return this.http.get(TicketService.URL);
  }

  postATicket(user: TicketClass): Observable<any> {
    return this.http.post(TicketService.URL, user);
  }

  deleteATicket(id: number): Observable<any> {
    return this.http.delete(TicketService.URL + '/' + id);
  }
}
