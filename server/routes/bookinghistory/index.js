module.exports = function(app,orders,users){

	//To book the car
	app.route('/user/book')
	   .post(function(req,res){

	   	var doc = {
	   		userName : req.body.username,
	   		carName : req.body.carname,
	   		bookingDate :  new Date()
	   	}

	   	orders.insert(doc, function(err,result){
	   		if(err){
	 				res.json({status : false});
	 		}else{
	 				res.json({status : true});
	 		}
	   	});

	});

	//To view the booking history

	app.route('/user/history')
	   .post(function(req,res){
	   	var query = {userName : req.body.username};

	   	users.findOne(query,function(err,doc){
	   		if(err){
	   			res.json({errorcode:0,history:null});
	   		}else{
	   			if(doc.role == "user"){
	   				orders.find(query).toArray(function(error,docs){
	   					if(error){
	   						res.json({errorcode:0,history:null});
	   					}else{
	   						var data = JSON.stringify(docs);
	   						res.json({errorcode:1,history:docs});
	   					}
	   				});

	   			}else{
	   				var aggregateQuery = [
		   						{$project: {month: { $month: "$bookingDate" }}}, 
								{ $group: {_id: "$month",total: {$sum: "$month" }}}
							];

					orders.aggregate(aggregateQuery, function(error,results){
						if(error){
	   						res.json({errorcode:0,data:null,labels:null});
	   					}else{
	   						var data =[];
    						var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	   						var total =[];
	   						var found =0;
	   						for(var i=1;i<=12;i++){
	   							for(var j=0;j<results.length;j++){
	   								if(results[j]._id==i){
	   									data.push(results[j].total/i);
	   									found++;
	   								}
	   							}
	   							if(found==0){
	   								data.push(0);
	   							}
	   						}
	   						res.json({errorcode:0,data:data,labels:labels});
	   					}
					});
	   			}
	   		}
	   	});

	});


}