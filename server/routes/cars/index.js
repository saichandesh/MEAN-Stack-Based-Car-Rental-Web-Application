module.exports = function(app,rentalcars,multer,host,port){

	var fs = require('fs');
	//To view the cars
	app.route('/cars/view')
	   .get(function(req,res){
	   		rentalcars.find().toArray(function(err,docs){
	   			if(err){
	   				res.json([{found:false}]);
	   			}else{
	   				var data = [];
	   				for(var i=0;i<docs.length;i++){
	   					docs[i].imagePath = 'http://'+host+':'+port+'/static/images/'+docs[i].imagePath;
	   					data.push(docs[i]);
	   				}
	   				
	   				res.json(data);
	   			}
	   		});
	});

	var filepath ='';
	var storage = multer.diskStorage({ //multers disk storage settings
	        destination: function (req, file, cb) {
	            cb(null, './assets/images/');
	        },
	        filename: function (req, file, cb) {
	            var datetimestamp = Date.now();
	            filepath = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
	            cb(null, filepath);

	        }
	    });

	var upload = multer({ //multer settings
	                    storage: storage
	                }).single('file');

	//To add new cars
	app.route('/cars/add')
	   .post(function(req,res){
		//upload images to server/assets/images/
	   	upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
            }
            var doc = {
	   			carName : req.body.carname,
	   			segment : req.body.segment,
	   			rentCost : req.body.rentcost,
	   			imagePath : req.body.filepath
   			}

   			rentalcars.insert(doc,function(err,result){
   				if(err){
   					res.json({error_code:1,err_desc:err});
   				}else{
   					res.json({error_code:0,err_desc:null});
   				}
   			});
        });
   		
	});

	 //To update car information
	 app.route('/cars/update')
	 	.put(function(req,res){
	 		var query = {carName : req.body.carname};
	 		var updateinfo = {$set: {
	   			segment : req.body.segment,
	   			rentCost : req.body.rentcost
	   		}};

	   		rentalcars.update(query,updateinfo,function(err,result){
	   			if(err){
	 				res.json({status : false});
	 			}else{
	 				res.json({status : true});
	 			}
	   		});
	 });

	 //To delete car information
	 app.route('/cars/delete')
	 	.delete(function(req,res){
	 		var query = {carName : req.body.carname};

	 		rentalcars.deleteOne(query,function(err,result){
	 			if(err){
	 				res.json({status : false});
	 			}else{
	 				res.json({status : true});
	 			}
	 		});
	 });

}