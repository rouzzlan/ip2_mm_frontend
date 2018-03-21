import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/_home/home.component";
import {LoginComponent} from "./components/_account/login/login.component";
import {AuthGuard} from "./services/guards/auth-guard.service";
import {TestComponent} from "./components/test/test/test.component";
import {ConfirmationComponent} from "./components/_account/confirmation/confirmation.component";
import {RegistrationComponent} from "./components/_account/registration/registration.component";
import {LesgeverGuard} from "./services/guards/lesgever-guard.service";
import {AdminComponent} from "./components/_admin/admin.component";
import {MusicComponent} from "./components/lib/music/music.component";
import {CordsComponent} from "./components/lib/cords/cords.component";
import {InstrumentsComponent} from "./components/lib/instruments/instruments.component";
import {SearchComponent} from "./components/lib/search/search.component";
import {UsersComponent} from "./components/_admin/users/users.component";
import {BeheerderGuard} from "./services/guards/beheerder-guard.service";
import {InstrumentHomeComponent} from "./components/_admin/Instrument/instrument-home/instrument-home.component";
import {CreateInstrumentComponent} from "./components/_admin/Instrument/create-instrument/create-instrument.component";
import {DetailsInstrumentComponent} from "./components/_admin/Instrument/details-instrument/details-instrument.component";
import {EditInstrumententComponent} from "./components/_admin/Instrument/edit-instrumentent/edit-instrumentent.component";
import {DeleteInstrumentComponent} from "./components/_admin/Instrument/delete-instrument/delete-instrument.component";
import {GetBandsComponent} from "./components/_admin/band/get-bands/get-bands.component";
import {BandDetailComponent} from "./components/_admin/band/band-detail/band-detail.component";
import {EditBandComponent} from "./components/_admin/band/edit-band/edit-band.component";
import {DeleteBandComponent} from "./components/_admin/band/delete-band/delete-band.component";
import {CreateBandComponent} from "./components/_admin/band/create-band/create-band.component";
import {GetBandsOfUserComponent} from "./components/_admin/band/get-bands-of-user/get-bands-of-user.component";

const routes: Routes = [
  //HOME
  {path: 'home', component: HomeComponent},

  //region CRUD

  //region INSTRUMENTS
  {path: 'instruments', component: InstrumentHomeComponent},
  {path: 'instrument/create', component: CreateInstrumentComponent},
  {path: 'instrument/detail/:id', component: DetailsInstrumentComponent},
  {path: 'instrument/edit/:id', component: EditInstrumententComponent},
  {path: 'instrument/delete/:id', component: DeleteInstrumentComponent},
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

  //NON-SPECIFIED PATH REDIRECT
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
