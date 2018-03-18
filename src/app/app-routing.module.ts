import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/user/login/login.component';
import {AdminComponent} from './components/test/admin/admin.component';
import {AuthGuard} from './guards/auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';

import {HomeComponent} from './components/home/home.component';
import {UserComponent} from './components/test/user/user.component';
import {RegistrationComponent} from "./components/user/registration/registration.component";
import {ConfirmationComponent} from "./components/user/confirmation/confirmation.component";
import {UserListComponent} from "./components/CRUD/users/user-list/user-list.component";
import {InstrumentHomeComponent} from "./components/CRUD/Instrument/instrument-home/instrument-home.component";
import {CreateEventComponent} from "./components/CRUD/agenda/create-event/create-event.component";
import {DeleteEventComponent} from "./components/CRUD/agenda/delete-event/delete-event.component";
import {CreateBandComponent} from "./components/CRUD/band/create-band/create-band.component";
import {DeleteInstrumentComponent} from "./components/CRUD/Instrument/delete-instrument/delete-instrument.component";
import {EditInstrumententComponent} from "./components/CRUD/Instrument/edit-instrumentent/edit-instrumentent.component";
import {DetailsInstrumentComponent} from "./components/CRUD/Instrument/details-instrument/details-instrument.component";
import {CreateInstrumentComponent} from "./components/CRUD/Instrument/create-instrument/create-instrument.component";
import {EditEventComponent} from "./components/CRUD/agenda/edit-event/edit-event.component";
import {GetBandsComponent} from "./components/CRUD/band/get-bands/get-bands.component";
import {BandDetailComponent} from "./components/CRUD/band/band-detail/band-detail.component";
import {EditBandComponent} from "./components/CRUD/band/edit-band/edit-band.component";
import {DeleteBandComponent} from "./components/CRUD/band/delete-band/delete-band.component";
import {GetBandsOfUserComponent} from "./components/CRUD/band/get-bands-of-user/get-bands-of-user.component";

const routes: Routes = [
  //HOME
  {path: 'home', component: HomeComponent},

  //region CRUD

  //region USERS
  {path: 'users', component: UserListComponent},
  // endregion

  //region INSTRUMENTS
  {path: 'instruments', component: InstrumentHomeComponent},
  {path: 'instrument/create', component: CreateInstrumentComponent},
  {path: 'instrument/detail/:id', component: DetailsInstrumentComponent},
  {path: 'instrument/edit/:id', component: EditInstrumententComponent},
  {path: 'instrument/delete/:id', component: DeleteInstrumentComponent},
  // endregion

  //region EVENTS
  {path: 'events', component: CreateEventComponent},
  {path: 'events/edit/:id', component: EditEventComponent},
  {path: 'events/delete/:id', component: DeleteEventComponent},
  {path: 'events/create', component: CreateEventComponent},
  // endregion

  //region BANDS
  {path: 'bands', component: GetBandsComponent},
  {path: 'bands/banddetail/:id', component: BandDetailComponent},
  {path: 'bands/editband/:id', component: EditBandComponent},
  {path: 'bands/deleteband/:id', component: DeleteBandComponent},
  {path: 'bands/createband', component: CreateBandComponent},
  {path: 'bands/:userId', component: GetBandsOfUserComponent},
  //endregion
  // endregion

  // ACCOUNT
  {path: 'register', component: RegistrationComponent},
  {path: 'confirm', component: ConfirmationComponent},
  {path: 'login', component: LoginComponent},

  //PROTECTED PAGES
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},

  //NON-SPECIFIED PATH REDIRECT
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
