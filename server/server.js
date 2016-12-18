var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8080;
var mongo = require("mongodb");
var Server = mongo.Server;
var Db = mongo.Db;
var ObjectID = mongo.ObjectID;
try{	
	var config = require('./configure.js');
}catch(e){
	console.log("configuration file is hidden on github for security");
	config = null;
}
var usersCollection = config.usersCollection;
var rentalCarsCollection = config.rentalCarsCollection;
var login = require('./routes/login/index.js');
var signup = require('./routes/signup/index.js');
var cars = require('./routes/cars/index.js');
var bookinghistory = require('./routes/bookinghistory/index.js');
var bcrypt = require('bcryptjs');
var multer = require('multer');
var Database = new Db(process.env.DBNAME || config.DBNAME , new Server(process.env.DBHOST || config.DBHOST, process.env.DBPORT || config.DBPORT, {'native_parser': true}));


Database.open(function (err, mongoclient) {
		if(err){
			console.log("Failed to connect to the database. Please Check the connection");
			throw err;
		}else{
			Database.authenticate(process.env.DBUSER || config.DBUSER, process.env.DBPASS || config.DBPASS, function(err, res) {
	            if (err) {
	            	console.log("Authentication Failed"); 
	            	throw err; 
	           	}else{
					console.log("Connected to the database Successfully");
					app.use(function(req, res, next) { //allow cross origin requests
				        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
				        res.header("Access-Control-Allow-Origin", "http://localhost:9019");
				        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
				        next();
				    });
					app.use(bodyParser.urlencoded({ extended: true }));
		            app.use(bodyParser.json());

					var users = Database.collection(usersCollection);
					var rentalcars = Database.collection(rentalCarsCollection);
					login(app,users,bcrypt);
					signup(app,users,bcrypt);
					cars(app,rentalcars,multer);
					bookinghistory(app,users);
				}
			});
		}
	});

app.listen(port,function(){
	console.log("Server Started Listening to port : "+port);
});