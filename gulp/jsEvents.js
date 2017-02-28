var gulp = require('gulp'),
   config = require("./config"),
   browserify = require('browserify'),
   source = require('vinyl-source-stream'),
   gulpWatch = require('gulp-watch'),
	babel = require('gulp-babel'),
	minify = require('gulp-minify')
	utils = require('./utils'),
	color = require('gulp-color');

module.exports = {
	copy:function(callback){
		utils.showIndicator("[" + config.projectName + "] JS minification started ");
		return browserify({
			entries:'./app/js/init.js',
			transform: ['require-globify']
		}).bundle().on('error', function(error){
	      	console.log(error);
	      	utils.stopIndicator();
	      	console.error(color("[ERROR] JS PARSE ERROR PLEASE CHECK ALL THE FILES",'RED'));
	      	callback();	
		})
		    //Pass desired output filename to vinyl-source-stream
	   .pipe(source(config.fileNames.js))
	    // Start piping stream to tasks!
	   .pipe(gulp.dest(config.destination)).on('end',function(){
	   	gulp.src(config.destination+'/'+config.fileNames.js).pipe(babel({
            presets: ['es2015'], //this fixed a shorthand javascript error
            compact: true
         }))
	      .pipe(minify({
				options:{
					outSourceMap:true
	     		}	
	  		}))
      	.pipe(gulp.dest(config.destination));
      	utils.stopIndicator();
      	callback();
		});
	},
	watch:function(browserSync){
		var self = this;
		// watching all the js files.
		gulpWatch(config.watch.js, config.watch.options).on(config.watch.event,function(event){
			console.log("File "+ event +" was modified");
		   self.copy(browserSync.reload);     
		});
		console.log("[" + config.projectName + "] Watching JS files ");
	}
}