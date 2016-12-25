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
var orderCollection = config.orderCollection;
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
					app.use(function(req, res, next) {
					  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
					  res.setHeader("Access-Control-Allow-Credentials", "false");
					  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
					  res.header("Access-Control-Allow-Headers", "Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since");
					  next();
					});

					app.use(bodyParser.urlencoded({ extended: true }));
		            app.use(bodyParser.json());
		            app.use('/static',express.static('assets'));
					var users = Database.collection(usersCollection);
					var rentalcars = Database.collection(rentalCarsCollection);
					var orders = Database.collection(orderCollection);
					login(app,users,bcrypt);
					signup(app,users,bcrypt);
					cars(app,rentalcars,multer,config.SERVERHOST,config.SERVERPORT);
					bookinghistory(app,orders,users);
				}
			});
		}
	});

app.listen(port,function(){
	console.log("Server Started Listening to port : "+port);
});