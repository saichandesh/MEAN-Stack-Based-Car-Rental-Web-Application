import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from '../webservices/api.service';

@Injectable()
export class SalesService{
	
	constructor(private apiService : ApiService){ }

	getSales(username) :Observable<any>{
		return this.apiService.getSales(username);
	}
}