import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from '../webservices/api.service';

@Injectable()
export class AddCarService{
	
	constructor(private apiService : ApiService){ }

	addCarDetails(carname,segment,rent,filepath): Observable<any>{

		return this.apiService.addCarDetails(carname,segment,rent,filepath);

	}
}