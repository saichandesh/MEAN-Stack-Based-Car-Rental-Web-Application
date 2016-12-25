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
   						res.json({status : true, found:true, role:doc.role});
   					}else{
   						res.json({status : false, found:true, role:null});
   					}
	   			}else{
	   				res.json({status : false, found:false ,role:null});
	   			}	   			
	   		});
	   });
	
}
