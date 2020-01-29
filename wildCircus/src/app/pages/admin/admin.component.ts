import { UserClass } from './../../shared/models/user-class';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../shared/services/reservation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private users: UserClass[] = [];

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
