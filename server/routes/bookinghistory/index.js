module.exports = function(app,users){

	//To book the car
	app.route('/user/book')
	   .post(function(req,res){

	   	var query = {userName : req.body.username};
	   	var updatedinfo = {$push : 
	   					{ BookingHistory : {
	   						carName: req.body.carname,
	   						date : Date.now()
	   						}
	   					}
	   				};

	   	users.update(query,updatedinfo,function(err,result){
	   		if(err){
	 				res.json({status : false});
	 		}else{
	 				res.json({status : true});
	 		}
	   	});

	});

	//To view the booking history

	app.route('/user/history')
	   .get(function(req,res){

	   	var query = {userName : req.query.username};

	   	users.findOne(query,function(err,doc){
	   		if(err){
	   			res.json({errorcode:0,history:null});
	   		}else{
	   			if(doc.role == "user"){
	   				var data = doc.BookingHistory;
	   				res.json({errorcode:1,history:data});
	   			}else{
	   				users.find().toArray(function(err,docs){
	   					if(err){
	   						res.json({errorcode:0,history:null});
	   					}else{
	   						var data=[];
	   						for(var i=0;i<docs.length;i++){
	   							for(var j=0;j<docs[i].BookingHistory.length;j++){
	   								data.push(docs[i].BookingHistory[j]);
	   							}
	   						}
	   						res.json({errorcode:1,history:data});
	   					}
	   				});

	   			}
	   		}
	   	})
	});


}