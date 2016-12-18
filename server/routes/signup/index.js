module.exports = function(app,users,bcrypt){
	app.route('/signup')
	   .post(function(req,res){
			var salt = bcrypt.genSaltSync(10);
	   		var password = req.body.password;
	   		var encryptedPassword = bcrypt.hashSync(password, salt); //To hash a password

	   		var doc = { userName:req.body.username,
	   					password : encryptedPassword,
						FirstName:req.body.firstname,
						LastName:req.body.lastname,
						Email:req.body.email,
						BookingHistory : [],
						role : "user"
			};

			users.insert(doc,function(err,info){
				if(err){
					res.send({inserted:'fail'});
				}else{
					console.log('Successfully inserted ' + JSON.stringify(info));
                   	res.send({inserted: 'done'});
				}
			});
	   	});
}