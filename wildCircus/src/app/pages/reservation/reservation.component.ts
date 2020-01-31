import { ModalComponent } from './../../modal/modal.component';
import { TicketClass } from './../../shared/models/ticket-class';
import { UserClass } from './../../shared/models/user-class';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  user: UserClass;
  ticket: TicketClass;

  constructor(private reservationService: ReservationService,  public matDialog: MatDialog) { }

  ngOnInit() {
    this.user = new UserClass();
    this.ticket = new TicketClass();
  }

  createReservation() {
    console.log(this.user);
    this.reservationService.postAUser({
      name: this.user.name,
      email: this.user.email,
      tickets: [
        {
          date: this.ticket.date,
          nombreTickets: this.ticket.nombreTickets
        }
      ]
    }).subscribe(response => this.user = response);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}
