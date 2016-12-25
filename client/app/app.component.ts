import { Component, OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { TokenService } from './services/webservices/token.service';
import { SharedService } from './services/sharedservice/shared.service';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: `app.component.html`,
  styleUrls : ['app.component.css'],
})



export class AppComponent implements OnInit{
  	
  	constructor(public tokenService :TokenService, public router :Router ,public sharedService : SharedService){ }

  	signout() {
  		this.tokenService.remove();
      this.sharedService.setDefault();
      this.router.navigate([('/home')]);
  	}

  	ngOnInit(){

  	}
}
