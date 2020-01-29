import { AdminComponent } from './pages/admin/admin.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home' , component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
