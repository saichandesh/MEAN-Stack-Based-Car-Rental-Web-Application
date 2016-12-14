var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8080;
var mongo = require("mongodb");
var Mongoclient = mongo.MongoClient;
try{	
	var configure = require('./configure.js');
}catch(e){
	console.log("configuration file is hidden on github for security");
	configure = null;
}
var dburl = configure.url; //url to connect to the mongod
var usersCollection = configure.usersCollection;
var login = require('./routes/login/index.js');

Mongoclient.connect(dburl,function(err,db){
		if(err){
			console.log("Failed to connect to the database. Please Check the connection");
			throw err;
		}else{
			console.log("Connected to the database Successfully");
			app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
			var users = db.collection(usersCollection);
			login(app,users);
			db.close();
		}
	});

app.listen(port,function(){
	console.log("Server Started Listening to port : "+port);
});