import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/_home/home.component';
import {LoginComponent} from './components/_account/login/login.component';
import {AuthGuard} from './services/guards/auth-guard.service';
import {TestComponent} from './components/test/test/test.component';
import {ConfirmationComponent} from './components/_account/confirmation/confirmation.component';
import {RegistrationComponent} from './components/_account/registration/registration.component';
import {LesgeverGuard} from './services/guards/lesgever-guard.service';
import {AdminComponent} from './components/_admin/admin.component';
import {MusicComponent} from './components/lib/music/music.component';
import {CordsComponent} from './components/lib/cords/cords.component';
import {InstrumentsComponent} from './components/lib/instruments/instruments.component';
import {SearchComponent} from './components/lib/search/search.component';
import {UsersComponent} from './components/_admin/users/users.component';
import {BeheerderGuard} from './services/guards/beheerder-guard.service';
import {MusicpiecesComponent} from './components/_admin/musicpieces/musicpieces.component';
import {GetEventsComponent} from './components/_admin/agenda/get-events/get-events.component';
import {GetEventsComponent} from './components/_admin/agenda/get-events/get-events.component';
import {GetAllEventsComponent} from './components/_admin/agenda/get-all-events/get-all-events.component';
import {DetailsEventComponent} from './components/_admin/agenda/details-event/details-event.component';
import {EditEventComponent} from './components/_admin/agenda/edit-event/edit-event.component';
import {DeleteEventComponent} from './components/_admin/agenda/delete-event/delete-event.component';
import {CreateEventComponent} from './components/_admin/agenda/create-event/create-event.component';
import {GetEventsUserComponent} from './components/_admin/agenda/get-events-User/get-events-user.component';

const routes: Routes = [
  //HOME
  {path: 'home', component: HomeComponent},

  //CRUD
  // {path: 'users', component: UserListComponent},
  // {path: 'instruments', component: InstrumentHomeComponent},
  // EVENT
  {path: 'events', component: GetEventsComponent},
  {path: 'events/all', component: GetAllEventsComponent},
  {path: 'events/detail/:id', component: DetailsEventComponent},
  {path: 'events/edit/:id', component: EditEventComponent},
  {path: 'events/delete/:id', component: DeleteEventComponent},
  {path: 'events/create', component: CreateEventComponent},
  {path: 'events/user/:id', component: GetEventsUserComponent},
  // {path: 'band', component: CreateBandComponent},

  //ACCOUNT
  //open to all
  {path: 'account/register', component: RegistrationComponent},
  {path: 'account/confirm', component: ConfirmationComponent},
  {path: 'account/login', component: LoginComponent},

  //TokenTest for authenticated users
  {path: 'test', component: TestComponent, canActivate: [AuthGuard]},

  //LIBRARIES
  //open to authenticated users
  {path: 'lib/music', component: MusicComponent, canActivate: [AuthGuard]},
  {path: 'lib/cords', component: CordsComponent, canActivate: [AuthGuard]},
  {path: 'lib/instruments', component: InstrumentsComponent, canActivate: [AuthGuard]},
  {path: 'lib/search', component: SearchComponent, canActivate: [AuthGuard]},

  //RESTRICTED
  //navigation requires at least lesgever rights, some components require more
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, LesgeverGuard]},
  {path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard, BeheerderGuard]},
  {path: 'admin/musicpieces', component: MusicpiecesComponent, canActivate: [AuthGuard, LesgeverGuard]},

  //NON-SPECIFIED PATH REDIRECT
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
