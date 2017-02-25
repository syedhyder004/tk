var gulp = require('gulp'),
   config = require("./config"),
   browserify = require('browserify'),
   source = require('vinyl-source-stream'),
   gulpWatch = require('gulp-watch'),
	babel = require('gulp-babel'),
	minify = require('gulp-minify');

module.exports = {
	copy:function(){
	return browserify({
		entries:'./app/js/init.js',
		transform: ['require-globify']
	}).bundle()
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
      	console.log("Completed minifying JS files");
		});
	},
	watch:function(browserSync){
		var self = this;
		// watching all the js files.
		gulpWatch(config.watch.js, config.watch.options).on(config.watch.event,function(event){
		   self.copy().on('end',browserSync.reload);
      	console.log("Completed minifying JS files");       
		});
		console.log("Watching JS files ");
	}
}