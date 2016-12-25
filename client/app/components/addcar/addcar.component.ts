import { Component, OnInit} from '@angular/core';
import { AddCarService } from '../../services/addcar/addcar.service';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector : 'addcar',
	providers : [AddCarService],
	templateUrl : `addcar.component.html`
})

export class AddCarComponent implements OnInit {
	//variables declarations
	carname :any;
	segment :any;
	rent :any;
	error :boolean;
	errorMessage :string;
	filepath :any;

	constructor(public addCarService :AddCarService, public router :Router){ }

	addCarDetails(){
		this.addCarService.addCarDetails(this.carname,this.segment,this.rent,this.filepath)
			.subscribe(
				response => {
					if(response.error_code){
						this.error = false;
						this.router.navigate([('/home')]);
					}else{
						this.error = true;
						this.errorMessage = "Error in adding the car details";
					}
				},err => {
					console.log(err);
					this.error = true;
					this.errorMessage = "Error in adding the car details";
				});

	}

	ngOnInit(){
		this.error = false;
	}
}