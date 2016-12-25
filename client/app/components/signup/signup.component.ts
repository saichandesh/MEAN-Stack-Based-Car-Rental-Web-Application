import { Component, OnInit} from '@angular/core';
import { SignupService } from '../../services/signup/signup.service';
import { SharedService } from '../../services/sharedservice/shared.service';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector : 'signup',
	providers : [SignupService],
	templateUrl : `signup.component.html`
})

export class SignupComponent implements OnInit {
	//variables declarations
	username :any;
	password :any;
	firstname :any;
	lastname :any;
	email :any;
	error :boolean;
	errorMessage :string;

	constructor(public signupService :SignupService, public router :Router, public sharedService :SharedService){ }

	signupDetails(){
		this.signupService.signupDetails(this.username,this.password,this.firstname,this.lastname,this.email)
			.subscribe(
				response => {
					if(response.inserted){
						this.error = false;
						this.router.navigate([('/login')]);
					}else{
						this.error = true;
						this.errorMessage = "User already Exists. Please Login";
					}
				},err => {
					console.log(err);
				});

	}

	ngOnInit(){
		this.error = false;
		this.sharedService.refreshDetails();
	}
}