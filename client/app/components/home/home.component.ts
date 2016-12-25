import { Component, OnInit} from '@angular/core';

import { HomeService } from '../../services/home/home.service';
import { AppComponent } from '../../app.component';

import { SharedService } from '../../services/sharedservice/shared.service';

@Component({
	moduleId: module.id,
	selector : 'home',
	providers : [HomeService],
	templateUrl : `home.component.html`,
	styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
	
	cars=null;
	loading :boolean =false;
	loaded :boolean = false;
	loadedMessage :string = "";
	loadingInfo :string ="";
	carname :any;
	segment :any;
	rent :any;
	editing :boolean;
	imagePath :any;

	constructor(private homeService :HomeService, public sharedService :SharedService){ }

	bookCar(carname){
		this.loading = true;
		this.loaded = false;
		this.loadingInfo = "loading the car...Please Wait (Don't close the window)";

		this.homeService.bookCar(carname,this.sharedService.username)
						.subscribe(
					   		response => {
					   			this.loading = false;
								this.loaded = true;
								if(response.status){
									this.loadedMessage="Booked successfully. Check the Order History";
								}else{
									this.loadedMessage="Error in Booking the car...please try later";
								}
					   		},err => {
					   			this.loading = false;
								this.loaded = true;
					   			this.loadedMessage="Error in Booking the car...please try later";
					   	});
	}

	deleteCar(carname){
		this.loading = true;
		this.loaded = false;
		this.editing = false;
		this.loadingInfo = "Deleting the car...Please Wait (Don't close the window)";
		this.homeService.deleteCar(carname)
						.subscribe(
					   		response => {
					   			this.loading = false;
								this.loaded = true;
								if(response.status){
									this.loadedMessage="Delted successfully.";
									this.ngOnInit();
								}else{
									this.loadedMessage="Error in deleting the car...please try later";
								}
					   		},err => {
					   			this.loading = false;
								this.loaded = true;
					   			this.loadedMessage="Error in deleting the car...please try later";
					   	});
	}


	editCar(car){
		this.loading = false;
		this.loaded = false;
		this.carname = car.carName;
		this.segment = car.segment;
		this.rent = car.rentCost;
		this.editing = true;
		this.imagePath = car.imagePath;
	}

	updateCarDetails(){
		this.homeService.updateCarDetails(this.carname,this.segment,this.rent)
						.subscribe(
					   		response => {
					   			this.editing = false;
					   			this.loading = false;
								this.loaded = true;
								if(response.status){
									console.log("edited");
									this.loadedMessage="Updated successfully.";
									this.ngOnInit();
								}else{
									this.loadedMessage="Error in upating the car...please try later";
								}
					   		},err => {
					   			this.loading = false;
								this.loaded = true;
					   			this.loadedMessage="Error in updating the car...please try later";
					   	});
	}

	ngOnInit(){
		this.sharedService.refreshDetails();
		this.homeService.getCarDetails()
					   .subscribe(
					   		response => {
								this.cars = response;
					   		},err => {
					   			console.log(err);
					   	});
	}
}