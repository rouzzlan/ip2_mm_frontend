import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {RestService} from './services/rest.service/rest.service';
import {LoginComponent} from './components/login/login.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {CreatePageComponent} from './components/create-page/create-page.component';
import {GetRolesComponent} from './components/get-roles/get-roles.component';
import {CreateBandComponent} from './components/create-band/create-band.component';
import {AlertComponent} from './components/alert/alert.component';
import {AlertServiceComponent} from './services/alert.service/alert.service.component';
import {AuthenticationServiceComponent} from './services/authentication.service/authentication-service.component';
import {AuthGuardComponent} from './services/authentication.service/auth-guard.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    EditUserComponent,
    CreatePageComponent,
    GetRolesComponent,
    CreateBandComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService, AlertServiceComponent,
    AuthenticationServiceComponent,
    AuthGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
