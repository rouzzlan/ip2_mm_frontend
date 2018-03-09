import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
import {GetEventComponent} from "./components/CRUD/agenda/get-events-User/get-events-user.component";
import {DeleteEventComponent} from "./components/CRUD/agenda/delete-event/delete-event.component";
import {CreateBandComponent} from "./components/CRUD/band/create-band/create-band.component";

const routes: Routes = [
  //HOME
  {path: 'home', component: HomeComponent},

  //CRUD
  {path: 'users', component: UserListComponent},
  {path: 'instruments', component: InstrumentHomeComponent},
  {path: 'events', component: CreateEventComponent},
  {path: 'events/:id', component: GetEventComponent},
  {path: 'events/:id', component: DeleteEventComponent},
  {path: 'band', component: CreateBandComponent},

  //ACCOUNT
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
