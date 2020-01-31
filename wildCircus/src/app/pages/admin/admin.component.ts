import { UserClass } from './../../shared/models/user-class';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';
import { TicketClass } from '../../shared/models/ticket-class';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'date', 'nbreTicket', 'delete'];
  private users: UserClass[] = [];
  dataSource = this.users;
  private tickets: TicketClass[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getUsers()
    .subscribe(response => this.users = response);
  }

  delete(id: number) {
    this.reservationService.deleteAUser(id)
    .subscribe(response => (this.users.splice(id, 1)));
  }

  refresh(): void {
    window.location.reload();
  }

}
