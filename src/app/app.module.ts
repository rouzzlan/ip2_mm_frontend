import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {RestService} from './services/rest.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
