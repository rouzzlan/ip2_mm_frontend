import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {UserListComponent} from './components/users/user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service/user.service';
import {LoginComponent} from './components/users/login/login.component';
import {EditUserComponent} from './components/users/edit-user/edit-user.component';
import {CreatePageComponent} from './components/users/create-page/create-page.component';
import {CreateBandComponent} from './components/band/create-band/create-band.component';
import {AlertComponent} from './components/utilities/alert/alert.component';
import {AlertServiceComponent} from './services/alert.service/alert.service.component';
import {AuthenticationServiceComponent} from './services/authentication.service/authentication-service.component';
import {AuthGuardComponent} from './services/authentication.service/auth-guard.component';
import {EventServiceComponent} from './services/event.service/event-service.component';
import {CreateeventComponent} from './components/agenda/create-event/createevent.component';
import {BandServiceService} from './services/band.service/band-service.service';
import { EditEventComponent } from './components/agenda/edit-event/edit-event.component';
import { DeleteEventComponent } from './components/agenda/delete-event/delete-event.component';
import { CreateInstrumentComponent } from './components/Instrument/create-instrument/create-instrument.component';
import {InstrumentService} from "./services/instrument.service/instrument.service";
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { GetEventComponent } from './components/agenda/get-events-User/get-events-user.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'users', component: UserListComponent},
  // {path: 'users/:email', component: UserDetailsComponent},
   {path: 'instruments', component: CreateInstrumentComponent},
  // {path: 'instrument', component: InstrumentDetailsComponent},
  // {path: 'bands', component: BandListComponent},
  // {path: 'bands/:id', component: BandDetailsComponent},
  // {path: 'profile', component: UserProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'events', component: CreateeventComponent},
  {path: 'events/:id', component: GetEventComponent},
  {path: 'events/:id', component: DeleteEventComponent},
  {path: 'band', component: CreateBandComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    EditUserComponent,
    CreatePageComponent,
    CreateBandComponent,
    AlertComponent,
    CreateeventComponent,
    EditEventComponent,
    DeleteEventComponent,
    CreateInstrumentComponent,
    UserProfileComponent,
    DeleteEventComponent,
    GetEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [UserService, AlertServiceComponent, InstrumentService,
    AuthenticationServiceComponent,
    AuthGuardComponent, EventServiceComponent, BandServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
