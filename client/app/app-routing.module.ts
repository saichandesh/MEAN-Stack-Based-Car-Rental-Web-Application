import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginComponent }  from './components/login/login.component';
import { HomeComponent }  from './components/home/home.component';
import { HistoryComponent }  from './components/history/history.component';
import { SignupComponent }  from './components/signup/signup.component';
import { AddCarComponent }  from './components/addcar/addcar.component';
import { SalesComponent }  from './components/sales/sales.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addcar', component: AddCarComponent },
  { path: 'sales', component: SalesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
