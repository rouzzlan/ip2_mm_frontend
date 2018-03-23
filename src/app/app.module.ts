import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/test/admin/admin.component';
import {LoginComponent} from './components/user/login/login.component';
import {UserComponent} from './components/test/user/user.component';

import {UserService} from './services/user.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './guards/auth-guard.service';
import {AdminAuthGuard} from './guards/admin-auth-guard.service';
import {TOKEN_NAME} from './services/auth.constant';
import {AppDataService} from './services/app-data.service';
import {CookieService} from 'ngx-cookie-service';
import {RegistrationComponent} from './components/user/registration/registration.component';
import {RegistrationService} from './services/registration.service';
import {ConfirmationComponent} from './components/user/confirmation/confirmation.component';
import {BandService} from './services/band/band.service';
import {EventService} from './services/event/event.service';
import {InstrumentService} from './services/instrument/instrument.service';
import {RestService} from './services/rest/rest.service';
import {MusicpieceService} from './services/musicpiece/musicpiece.service';
import {UserListComponent} from './components/CRUD/users/user-list/user-list.component';
import {EditUserComponent} from './components/CRUD/users/edit-user/edit-user.component';
import {CreatePageComponent} from './components/CRUD/users/create-page/create-page.component';
import {CreateBandComponent} from './components/CRUD/band/create-band/create-band.component';
import {EditEventComponent} from './components/CRUD/agenda/edit-event/edit-event.component';
import {DeleteEventComponent} from './components/CRUD/agenda/delete-event/delete-event.component';
import {CreateInstrumentComponent} from './components/CRUD/Instrument/create-instrument/create-instrument.component';
import {UserProfileComponent} from './components/CRUD/users/user-profile/user-profile.component';
import {GetEventComponent} from './components/CRUD/agenda/get-events-User/get-events-user.component';
import {InstrumentHomeComponent} from './components/CRUD/Instrument/instrument-home/instrument-home.component';
import {DetailsInstrumentComponent} from './components/CRUD/Instrument/details-instrument/details-instrument.component';
import {EditInstrumententComponent} from './components/CRUD/Instrument/edit-instrumentent/edit-instrumentent.component';
import {DeleteInstrumentComponent} from './components/CRUD/Instrument/delete-instrument/delete-instrument.component';
import {CreateEventComponent} from './components/CRUD/agenda/create-event/create-event.component';
import {HttpClientModule} from '@angular/common/http';
import {GetBandsComponent} from './components/CRUD/band/get-bands/get-bands.component';
import {GetBandsOfUserComponent} from './components/CRUD/band/get-bands-of-user/get-bands-of-user.component';
import {EditBandComponent} from './components/CRUD/band/edit-band/edit-band.component';
import {DeleteBandComponent} from './components/CRUD/band/delete-band/delete-band.component';
import {BandDetailComponent} from './components/CRUD/band/band-detail/band-detail.component';
import { CreateMusicpieceComponent } from './components/CRUD/musicpiece/create-musicpiece/create-musicpiece.component';
import { DetailMusicpieceComponent } from './components/CRUD/musicpiece/detail-musicpiece/detail-musicpiece.component';
import { ListMusicpieceComponent } from './components/CRUD/musicpiece/list-musicpiece/list-musicpiece.component';
import { EditMusicpieceComponent } from './components/CRUD/musicpiece/edit-musicpiece/edit-musicpiece.component';
import { SearchbarComponent } from './components/searchbar/searchbar/searchbar.component';
import { FilterInstrumentsPipe } from './components/searchbar/filter-instruments.pipe';
import { FilterMusicpiecePipe } from './components/searchbar/filter-musicpiece.pipe';

export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
      headerPrefix: 'Bearer',
      tokenName: TOKEN_NAME,
      globalHeaders: [{'Content-Type': 'application/json'}],
      noJwtError: false,
      noTokenScheme: true,
      tokenGetter: (() => localStorage.getItem(TOKEN_NAME))})
    // tokenGetter: (() => this.cookieService.get(TOKEN_NAME))})
    , http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    ConfirmationComponent,
    UserListComponent,
    EditUserComponent,
    CreatePageComponent,
    CreateBandComponent,
    BandDetailComponent,
    GetBandsComponent,
    GetBandsOfUserComponent,
    EditBandComponent,
    DeleteBandComponent,
    CreateEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    CreateInstrumentComponent,
    UserProfileComponent,
    DeleteEventComponent,
    GetEventComponent,
    InstrumentHomeComponent,
    DetailsInstrumentComponent,
    EditInstrumententComponent,
    DeleteInstrumentComponent,
    CreateMusicpieceComponent,
    DetailMusicpieceComponent,
    ListMusicpieceComponent,
    EditMusicpieceComponent,
    SearchbarComponent,
    FilterInstrumentsPipe,
    FilterMusicpiecePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    AuthenticationService,
    UserService,
    AuthGuard,
    AdminAuthGuard,
    AppDataService,
    CookieService,
    RegistrationService,
    BandService,
    EventService,
    InstrumentService,
    RestService,
    MusicpieceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

