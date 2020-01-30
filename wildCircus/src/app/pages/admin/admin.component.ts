import { UserClass } from './../../shared/models/user-class';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';
import { TicketService } from '../../shared/services/ticket.service';
import { TicketClass } from '../../shared/models/ticket-class';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private users: UserClass[] = [];
  private tickets: TicketClass[] = [];

  constructor(private reservationService: ReservationService, private ticketService: TicketService) { }

  ngOnInit() {
    this.reservationService.getUsers()
    .subscribe(response => this.users = response);
    // this.ticketService.getTicket()
    // .subscribe(data => this.tickets = data);
  }

  delete(id: number) {
    this.reservationService.deleteAUser(id)
    .subscribe(response => (this.users.splice(id, 1)));
    // this.ticketService.deleteATicket(id)
    // .subscribe(data => (this.tickets.splice(id, 1)));
  }



  refresh(): void {
    window.location.reload();
  }

}
