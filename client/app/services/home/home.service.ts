import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { ApiService } from '../webservices/api.service';


@Injectable()
export class HomeService {
	
	constructor(private apiService : ApiService){ }

	getCarDetails(): Observable<any>{
		return this.apiService.getCarDetails();

	}

	bookCar(carname,username) :Observable<any>{

		return this.apiService.bookCar(carname,username);
	}

	deleteCar(carname):Observable<any>{

		return this.apiService.deleteCar(carname);
	}

	updateCarDetails(carname,segment,rent) :Observable<any>{

		return this.apiService.updateCarDetails(carname,segment,rent);
	}
}