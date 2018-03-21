import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

import {LoginService} from "./services/account/login.service";
import {TestService} from "./services/test.service";
import {AuthService} from './services/account/auth.service';

import {AuthGuard} from "./services/guards/auth-guard.service";
import {BeheerderGuard} from "./services/guards/beheerder-guard.service";
import {LesgeverGuard} from "./services/guards/lesgever-guard.service";
import {LeerlingGuard} from "./services/guards/leerling-guard.service";

import {HomeComponent} from "./components/_home/home.component";
import {TestComponent} from "./components/test/test/test.component";

import {HttpModule} from "@angular/http";
import {RegistrationService} from './services/account/registration.service';

import {LoginComponent} from "./components/_account/login/login.component";
import {RegistrationComponent} from "./components/_account/registration/registration.component";
import {ConfirmationComponent} from "./components/_account/confirmation/confirmation.component";

import { MusicComponent } from './components/lib/music/music.component';
import { CordsComponent } from './components/lib/cords/cords.component';
import { InstrumentsComponent } from './components/lib/instruments/instruments.component';
import { SearchComponent } from './components/lib/search/search.component';
import {AdminComponent} from "./components/_admin/admin.component";
import { UsersComponent } from './components/_admin/users/users.component';
import {LessonService} from './services/lesson/lesson.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    RegistrationComponent,
    ConfirmationComponent,
    AdminComponent,
    MusicComponent,
    CordsComponent,
    InstrumentsComponent,
    SearchComponent,
    UsersComponent,
    // UserListComponent,
    // EditUserComponent,
    // CreatePageComponent,
    // CreateBandComponent,
    // CreateEventComponent,
    // EditEventComponent,
    // DeleteEventComponent,
    // CreateInstrumentComponent,
    // UserProfileComponent,
    // DeleteEventComponent,
    // GetEventComponent,
    // InstrumentHomeComponent,
    // DetailsInstrumentComponent,
    // EditInstrumententComponent,
    // DeleteInstrumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080', ],       // TODO: Add heroku to whilelist
        blacklistedRoutes: ['localhost:8080/oauth/', ]  // TODO: Add heroku to blacklist
      }
    })
  ],
  providers: [
    TestService,

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

    // BandService,
    // EventService,
    // InstrumentService,
    // OldUserService,
    // RestService,
    JwtModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
