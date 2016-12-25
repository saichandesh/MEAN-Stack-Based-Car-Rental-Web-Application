import { Component, OnInit} from '@angular/core';

import { HistoryService } from '../../services/history/history.service';
import { SharedService } from '../../services/sharedservice/shared.service';

@Component({
	moduleId: module.id,
	selector : 'history',
	providers : [HistoryService],
	templateUrl : `history.component.html`
})

export class HistoryComponent implements OnInit {

	orders;

	constructor(public historyService :HistoryService, public sharedService :SharedService){ }

	ngOnInit(){
		this.sharedService.refreshDetails();
		this.historyService.getOrderHistory(this.sharedService.username)
						   .subscribe(
					   			response => {
					   				if(response.errorcode==0){
					   					console.log("error in loading the order history");
					   				}else{
					   					this.orders = response.history;
					   				}
					   			},err => {
					   				console.log("error in loading the order history");
					   		});
	}

}