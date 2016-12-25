import { Injectable } from '@angular/core';
import { CookieService} from 'angular2-cookie/core';


@Injectable()
export class TokenService{

	constructor(public cookieService :CookieService){ }

	save(username,role){
    	this.cookieService.put("userinfo",username);
    	this.cookieService.put("role",role);
    }

	get(){
		return this.cookieService.getAll();
	}

	remove(){
		this.cookieService.removeAll();
	}
}