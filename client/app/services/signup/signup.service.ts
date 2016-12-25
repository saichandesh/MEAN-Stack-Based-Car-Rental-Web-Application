import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from '../webservices/api.service';

@Injectable()
export class SignupService{
	
	constructor(private apiService : ApiService){ }

	signupDetails(username,password,firstname,lastname,email) :Observable<any>{
		return this.apiService.signupDetails(username,password,firstname,lastname,email);
	}
}