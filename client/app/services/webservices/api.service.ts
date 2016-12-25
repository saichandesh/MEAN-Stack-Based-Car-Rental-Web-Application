import { Injectable } from '@angular/core';

import { WebService } from './web.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService{
	
	constructor(private webService : WebService){ }

	loginDetails(username,password) :Observable<any>{

		let networkConfig = {
			'url': 'login',
			'data' : {
				'username' : username,
				'password' : password
			}
		};

		return this.webService.postDetails(networkConfig);

	}

	getCarDetails() :Observable<any>{

		let networkConfig = {
			'url': 'cars/view'
		};

		return this.webService.getDetails(networkConfig);

	}

	bookCar(carname,username) :Observable<any>{

		let networkConfig = {
			'url': 'user/book',
			'data' : {
				'carname' : carname,
				'username' : username
			}

		};

		return this.webService.postDetails(networkConfig);

	}

	getOrderHistory(username) :Observable<any>{

		let networkConfig = {
			'url': 'user/history',
			'data' : {
				'username' : username
			}
		};

		return this.webService.postDetails(networkConfig);

	}

	signupDetails(username,password,firstname,lastname,email) :Observable<any>{

		let networkConfig = {
			'url': 'signup',
			'data' : {
				'username' : username,
				'password' : password,
				'firstname' : firstname,
				'lastname' : lastname,
				'email' : email
			}
		};

		return this.webService.postDetails(networkConfig);

	}

	deleteCar(carname) :Observable<any>{

		let networkConfig = {
			'url': 'cars/delete',
			'data' : {
				'carname' : carname
			}
		};

		return this.webService.deleteDetails(networkConfig);

	}

	getSales(username) :Observable<any>{
		
		let networkConfig = {
			'url': 'user/history',
			'data' : {
				'username' : username
			}
		};

		return this.webService.postDetails(networkConfig);

	}

	addCarDetails(carname,segment,rent,filepath) :Observable<any>{

		let networkConfig = {
			'url': 'cars/add',
			'data' : {
				'carname' : carname,
				'segment' : segment,
				'rentcost' : rent,
				'filepath' : filepath
			}
		};

		return this.webService.postDetails(networkConfig);
	}


	updateCarDetails(carname,segment,rent) :Observable<any>{

		let networkConfig = {
			'url': 'cars/update',
			'data' : {
				'carname' : carname,
				'segment' : segment,
				'rentcost' : rent
			}
		};

		return this.webService.putDetails(networkConfig);
	}
}