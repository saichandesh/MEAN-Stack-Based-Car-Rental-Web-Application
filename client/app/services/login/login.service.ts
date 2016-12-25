import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from '../webservices/api.service';

@Injectable()
export class LoginService{
	
	constructor(private apiService : ApiService){ }

	loginDetails(username,password): Observable<any>{

		return this.apiService.loginDetails(username,password);

	}
}