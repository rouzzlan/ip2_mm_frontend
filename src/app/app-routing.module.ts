import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/user/login/login.component';
import {AdminComponent} from './components/test/admin/admin.component';
import {AuthGuard} from './guards/auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';

import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/test/user/user.component';
import {RegistrationComponent} from './components/user/registration/registration.component';
import {ConfirmationComponent} from './components/user/confirmation/confirmation.component';
import {UserListComponent} from './components/CRUD/users/user-list/user-list.component';
import {InstrumentHomeComponent} from './components/CRUD/Instrument/instrument-home/instrument-home.component';
import {CreateEventComponent} from './components/CRUD/agenda/create-event/create-event.component';
import {GetBandsComponent} from './components/CRUD/band/get-bands/get-bands.component';
import {BandDetailComponent} from './components/CRUD/band/band-detail/band-detail.component';
import {EditBandComponent} from './components/CRUD/band/edit-band/edit-band.component';
import {DeleteBandComponent} from './components/CRUD/band/delete-band/delete-band.component';
import {CreateBandComponent} from './components/CRUD/band/create-band/create-band.component';
import {GetEventsComponent} from './components/CRUD/agenda/get-events/get-events.component';
import {DetailsEventComponent} from './components/CRUD/agenda/details-event/details-event.component';
import {EditEventComponent} from './components/CRUD/agenda/edit-event/edit-event.component';
import {DeleteEventComponent} from './components/CRUD/agenda/delete-event/delete-event.component';
import {GetAllEventsComponent} from './components/CRUD/agenda/get-all-events/get-all-events.component';
import {GetEventsUserComponent} from './components/CRUD/agenda/get-events-User/get-events-user.component';

const routes: Routes = [
  // HOME
  {path: 'home', component: HomeComponent},

  // CRUD
  {path: 'users', component: UserListComponent},
  {path: 'instruments', component: InstrumentHomeComponent},
  {path: 'events', component: GetEventsComponent},
  {path: 'events/all', component: GetAllEventsComponent},
  {path: 'events/detail/:id', component: DetailsEventComponent},
  {path: 'events/edit/:id', component: EditEventComponent},
  {path: 'events/delete/:id', component: DeleteEventComponent},
  {path: 'events/create', component: CreateEventComponent},
  {path: 'events/user/:id', component: GetEventsUserComponent},
  {path: 'bands', component: GetBandsComponent},
  {path: 'bands/banddetail/:bandName', component: BandDetailComponent},
  {path: 'bands/editband/:bandName', component: EditBandComponent},
  {path: 'bands/deleteband/:bandName', component: DeleteBandComponent},
  {path: 'bands/createband', component: CreateBandComponent},


  // ACCOUNT
  {path: 'register', component: RegistrationComponent},
  {path: 'confirm', component: ConfirmationComponent},
  {path: 'login', component: LoginComponent},

  // PROTECTED PAGES
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},

  // NON-SPECIFIED PATH REDIRECT
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
