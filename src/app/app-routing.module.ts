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
import {OverviewMusicSheetsComponent} from "./components/lib/music_sheets/overview-music-sheets/overview-music-sheets.component";
import  {CreateMusicSheetComponent} from "./components/lib/music_sheets/create-music-sheet/create-music-sheet.component";
import {EditMusicSheetComponent} from "./components/lib/music_sheets/edit-music-sheet/edit-music-sheet.component";
import  {DetailMusicSheetComponent} from "./components/lib/music_sheets/detail-music-sheet/detail-music-sheet.component";

const routes: Routes = [
  //HOME
  {path: 'home', component: HomeComponent},

  //CRUD
  // {path: 'users', component: UserListComponent},
  // {path: 'instruments', component: InstrumentHomeComponent},
  // {path: 'events', component: CreateEventComponent},
  // {path: 'events/:id', component: GetEventComponent},
  // {path: 'events/:id', component: DeleteEventComponent},
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
  {path: 'lib/musicsheet', component: OverviewMusicSheetsComponent, canActivate: [AuthGuard]},
  {path: 'lib/musicsheet/create', component: CreateMusicSheetComponent,  canActivate: [AuthGuard]},
  {path: 'lib/musicsheet/detail/:id', component: DetailMusicSheetComponent, canActivate: [AuthGuard]},
  {path: 'lib/musicsheet/edit/:id', component: EditMusicSheetComponent,  canActivate: [AuthGuard]},
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
