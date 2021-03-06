import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './services/account/login.service';
import {AuthService} from './services/account/auth.service';
import {AuthGuard} from './services/guards/auth-guard.service';
import {BeheerderGuard} from './services/guards/beheerder-guard.service';
import {LesgeverGuard} from './services/guards/lesgever-guard.service';
import {LeerlingGuard} from './services/guards/leerling-guard.service';
import {HomeComponent} from './components/_home/home.component';
import {HttpModule} from '@angular/http';
import {RegistrationService} from './services/account/registration.service';
import {LoginComponent} from './components/_account/login/login.component';
import {RegistrationComponent} from './components/_account/registration/registration.component';
import {ConfirmationComponent} from './components/_account/confirmation/confirmation.component';
import {MusicComponent} from './components/lib/music/music.component';
import {CordsComponent} from './components/lib/cords/cords.component';
import {InstrumentsComponent} from './components/lib/instruments/instruments.component';
import {SearchComponent} from './components/lib/search/search.component';
import {AdminComponent} from './components/_admin/admin.component';
import {LessonService} from './services/lesson/lesson.service';
import {LessonComponent} from './components/_admin/lesson/lesson/lesson.component';
import {UsersHomeComponent} from './components/_admin/user/users-home/users-home.component';
import {EditInstrumententComponent} from './components/_admin/Instrument/edit-instrumentent/edit-instrumentent.component';
import {EditBandComponent} from './components/_admin/band/edit-band/edit-band.component';
import {CreateInstrumentComponent} from './components/_admin/Instrument/create-instrument/create-instrument.component';
import {CreateBandComponent} from './components/_admin/band/create-band/create-band.component';
import {DeleteInstrumentComponent} from './components/_admin/Instrument/delete-instrument/delete-instrument.component';
import {DetailsInstrumentComponent} from './components/_admin/Instrument/details-instrument/details-instrument.component';
import {BandDetailComponent} from './components/_admin/band/band-detail/band-detail.component';
import {GetBandsComponent} from './components/_admin/band/get-bands/get-bands.component';
import {DeleteBandComponent} from './components/_admin/band/delete-band/delete-band.component';
import {GetBandsOfUserComponent} from './components/_admin/band/get-bands-of-user/get-bands-of-user.component';
import {BandService} from './services/band/band.service';
import {InstrumentService} from './services/instrument/instrument.service';
import {UserService} from './services/user/user.service';
import {InstrumentHomeComponent} from './components/_admin/Instrument/instrument-home/instrument-home.component';
import {MusicpiecesComponent} from './components/_admin/musicpieces/createmusicpieces/musicpieces.component';
import {MusicpieceService} from './services/admin/musicpiece.service';
import {CreateEventComponent} from './components/_admin/agenda/create-event/create-event.component';
import {GetAllEventsComponent} from './components/_admin/agenda/get-all-events/get-all-events.component';
import {GetEventsComponent} from './components/_admin/agenda/get-events/get-events.component';
import {GetEventsUserComponent} from './components/_admin/agenda/get-events-User/get-events-user.component';
import {DeleteEventComponent} from './components/_admin/agenda/delete-event/delete-event.component';
import {EditEventComponent} from './components/_admin/agenda/edit-event/edit-event.component';
import {CalendarComponent, CalendarModule} from "ap-angular2-fullcalendar";
import {EventService} from "./services/event/event.service";
import {UserEditComponent} from './components/_admin/user/user-edit/user-edit.component';
import {UserCreateComponent} from './components/_admin/user/user-create/user-create.component';
import {UserDetailsComponent} from './components/_admin/user/user-details/user-details.component';
import {UserDeleteComponent} from './components/_admin/user/user-delete/user-delete.component';
import { CreateLessonComponent } from './components/_admin/lesson/create-lesson/create-lesson.component';
import { DeleteLessonComponent } from './components/_admin/lesson/delete-lesson/delete-lesson.component';
import { DetailsLessonComponent } from './components/_admin/lesson/details-lesson/details-lesson.component';
import { EditLessonComponent } from './components/_admin/lesson/edit-lesson/edit-lesson.component';
import { ChatComponent } from './components/chat/chat.component';
import { AllmusicpiecesComponent } from './components/_admin/musicpieces/allmusicpieces/allmusicpieces.component';
import { FilterMusicpiecePipe } from './components/searchbar/filter-musicpiece.pipe';
import { FilterInstrumentsPipe } from './components/searchbar/filter-instruments.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar/searchbar.component';
import { EditMusicpieceComponent } from './components/CRUD/musicpiece/edit-musicpiece/edit-musicpiece.component';
import { ListMusicpieceComponent } from './components/CRUD/musicpiece/list-musicpiece/list-musicpiece.component';
import { CreateMusicpieceComponent } from './components/CRUD/musicpiece/create-musicpiece/create-musicpiece.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,

    //PAGES
    HomeComponent,
    AdminComponent,

      //LIBRARIES
      MusicComponent,
      CordsComponent,
      SearchComponent,
      InstrumentsComponent,

    //ACCOUNT
    LoginComponent,
    RegistrationComponent,
    ConfirmationComponent,

    //INSTRUMENT
    InstrumentHomeComponent,
    CreateInstrumentComponent,
    DetailsInstrumentComponent,
    EditInstrumententComponent,
    DeleteInstrumentComponent,

    //BAND
    GetBandsComponent,
    GetBandsOfUserComponent,
    CreateBandComponent,
    BandDetailComponent,
    EditBandComponent,
    DeleteBandComponent,

    // EVENT
    CreateEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    GetEventsUserComponent,
    GetEventsComponent,
    GetAllEventsComponent,
    MusicpiecesComponent,
    AllmusicpiecesComponent,

    //LESSON
    LessonComponent,
    CreateLessonComponent,
    DeleteLessonComponent,
    DetailsLessonComponent,
    EditLessonComponent,

    //USER
    UsersHomeComponent,
    UserEditComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserDeleteComponent,
    ChatComponent
    FilterMusicpiecePipe
    FilterInstrumentsPipe,
    SearchbarComponent,
    EditMusicpieceComponent,
    ListMusicpieceComponent,
    DetailMusicpieceComponent,
    CreateMusicpieceComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080','127.0.0.1:8080'],        // TODO: Add heroku to whilelist
        blacklistedRoutes: ['localhost:8080/oauth/',]                   // TODO: Add heroku to blacklist
      }
    })
  ],
  providers: [
    //GUARDS
    AuthGuard,
    BeheerderGuard,
    LesgeverGuard,
    LeerlingGuard,

    //Account
    RegistrationService,
    AuthService,
    LoginService,

    //LESSON
    LessonService,

    //Admin
    MusicpieceService,
    BandService,
    InstrumentService,
    UserService,
    EventService,
    JwtModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
