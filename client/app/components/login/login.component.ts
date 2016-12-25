import { Component, OnInit} from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { SharedService } from '../../services/sharedservice/shared.service';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector : 'login',
	providers : [LoginService],
	templateUrl : `login.component.html`
})

export class LoginComponent implements OnInit {
	//variables declarations
	username :any;
	password :any;
	errorMessage :string;
	error :boolean;
	submitDisabled :boolean;
	
	constructor(public loginService :LoginService, public sharedService :SharedService, public router :Router){ }

	loginDetails(){
		this.loginService.loginDetails(this.username,this.password)
			.subscribe(
				response => {
					if(response.status){
						this.error = false;
						this.sharedService.loggedDetails(this.username,response.role);
						this.router.navigate([('/home')]);
					}else{
						this.error = true;
						if(response.found){
							this.errorMessage = "Username/password is wrong, Please login again";
						}else{
							this.errorMessage = "Username didn't exist. Please signup";
						}
					}
				},err => {
					console.log(err);
				});

	}

	ngOnInit(){
		this.error = false;
		this.submitDisabled = false;
		this.sharedService.refreshDetails();
	}
}