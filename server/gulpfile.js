var gulp = require('gulp');


// -----[ Plugins ]---------------------------------------------------------------
var sequence = require('run-sequence');
var server = require('gulp-express');

// -----[ Tasks ]---------------------------------------------------------------

// -----[ Connect Task ]------------ 
gulp.task('server', function () {
    // Start the server at the beginning of the task 
    server.run(['server.js','./routes/**/*.js']);
    gulp.watch(['server.js','./routes/**/*.js'], [server.run]);
});

gulp.task('default',function(){
	sequence('server');
});