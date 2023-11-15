import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
