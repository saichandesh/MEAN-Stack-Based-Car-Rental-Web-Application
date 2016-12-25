import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './components/login/login.component';
import { HomeComponent }  from './components/home/home.component';
import { HistoryComponent }  from './components/history/history.component';
import { SignupComponent }  from './components/signup/signup.component';
import { AddCarComponent }  from './components/addcar/addcar.component';
import { SalesComponent }  from './components/sales/sales.component';

import { ApiService }  from './services/webservices/api.service';
import { WebService }  from './services/webservices/web.service';
import { TokenService } from './services/webservices/token.service';
import { SharedService } from './services/sharedservice/shared.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HistoryComponent,
    SignupComponent,
    AddCarComponent,
    SalesComponent
  ],
  providers : [ApiService, WebService, CookieService ,TokenService, SharedService],
  bootstrap: [ AppComponent]
})


export class AppModule { }