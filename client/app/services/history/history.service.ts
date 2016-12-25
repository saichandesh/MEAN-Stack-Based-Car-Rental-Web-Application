import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from '../webservices/api.service';


@Injectable()
export class HistoryService {
	
	constructor(private apiService : ApiService){ }

	getOrderHistory(username) :Observable<any>{
		return this.apiService.getOrderHistory(username);
	}

}