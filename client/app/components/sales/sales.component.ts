import { Component, OnInit} from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';
import { SharedService } from '../../services/sharedservice/shared.service';
import {Router} from '@angular/router';


@Component({
	moduleId: module.id,
	selector : 'sales',
	providers : [SalesService],
	templateUrl : `sales.component.html`
})

export class SalesComponent implements OnInit {

	  public pieChartLabels:any[];
	  public pieChartData:any[];
	  public pieChartType:string = 'pie';

	  // events
	  public chartClicked(e:any):void {
	    console.log(e);
	  }

	  public chartHovered(e:any):void {
	    console.log(e);
	  }


	
	constructor(public salesService :SalesService, public sharedService :SharedService, public router :Router){ }


	ngOnInit(){
		this.salesService.getSales(this.sharedService.username)
						 .subscribe(
							 	response => {
							 		this.pieChartLabels = response.labels;
							 		this.pieChartData = response.data;
							 	},err=> {
							 		console.log("error in loading the details");
						 	});

	}
}