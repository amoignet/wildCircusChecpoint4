import { TicketClass } from './../../shared/models/ticket-class';
import { TicketService } from './../../shared/services/ticket.service';
import { UserClass } from './../../shared/models/user-class';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  user: UserClass;
  ticket: TicketClass;

  constructor(private reservationService: ReservationService, private ticketService: TicketService) { }

  ngOnInit() {
    this.user = new UserClass();
    this.ticket = new TicketClass();
  }

  createReservation() {
    this.reservationService.postAUser(this.user).subscribe(response => this.user = response);
    this.ticketService.postATicket(this.ticket).subscribe(response => this.ticket = response);
  }
}
