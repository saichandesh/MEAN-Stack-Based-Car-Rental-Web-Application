module.exports = function(app,users){
	app.route('/login')
	   .post(function(req,res){
	   		var username = req.body.username;
	   		var password = req.body.password;
	   		var query = {'FirstName':username};

	   		users.find().toArray(function(err,docs){
	   			if(err){
	   				throw err;
	   			}else{
	   				res.send(docs);
	   				// if(doc.LastName == password){
	   				// 	res.send({status : true});
	   				// }else{
	   				// 	res.send({status : false});
	   				// }
	   			}
	   		});
	   });
	
}
