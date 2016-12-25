import { Injectable } from '@angular/core';

import { TokenService } from '../webservices/token.service';

@Injectable()
export class SharedService {

	username :string="";
    userLogged :boolean = false;
    managerLogged :boolean = false;
    logged : boolean = false;
    cookies;

    constructor(public tokenService :TokenService){ }

    setDefault(){
		this.username ="";
	    this.userLogged = false;
	    this.managerLogged = false;
	    this.logged = false;
    }

    loggedDetails(username,role){
		this.username = username;
		this.logged = true;
		this.tokenService.save(username,role);
		if(role=="user"){
			this.userLogged = true;
	    	this.managerLogged = false;
		}else{
			this.userLogged = false;
	    	this.managerLogged = true;
		}
    }

    refreshDetails(){
    	this.cookies = this.tokenService.get();
    	if(this.cookies.userinfo){
    		this.username = this.cookies.userinfo;
    		this.logged = true;
    		if(this.cookies.role == "user"){
    			this.userLogged = true;
    			this.managerLogged = false;
    		}else{
    			this.userLogged = false;
    			this.managerLogged = true;
    		}
    	}else {
    		this.username = "";
    		this.logged = false;
    		this.userLogged = false;
    		this.managerLogged = false;
    	}

    }

}