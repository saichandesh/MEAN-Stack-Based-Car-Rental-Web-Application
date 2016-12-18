module.exports = function(app,users,bcrypt){
	app.route('/login')
	   .post(function(req,res){
	   		var username = req.body.username;
	   		var password = req.body.password;
	   		var query = {"userName":username};

	   		users.findOne(query,function(err,doc){
	   			if(err){
	   				throw err;
	   			}else if(doc){
   					if(bcrypt.compareSync(password, doc.password)){
   						res.send({status : true, found:true});
   					}else{
   						res.send({status : false, found:true});
   					}
	   			}else{
	   				res.send({status : false, found:false});
	   			}	   			
	   		});
	   });
	
}
