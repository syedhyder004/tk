var gulp = require('gulp'),
   concatCss = require('gulp-concat-css'),
   config = require("./config"),
   gulpWatch = require('gulp-watch'),
   utils = require('./utils');

module.exports = {
	copy:function(callback){
		utils.showIndicator("[" + config.projectName + "] CSS minification started ");
   	gulp.src(config.src.css)
        .pipe(concatCss(config.fileNames.css))
        .pipe(gulp.dest(config.dest.css)).on('end',function(){
      		utils.stopIndicator();
      		callback()
   	});
	},
	watch:function(browserSync){
		var self = this;
		// watching all the css files.
		gulpWatch(config.watch.css,config.watch.options).on(config.watch.event,function(event){ 
			console.log("File "+ event +" was modified");
		   self.copy().on('end',browserSync.reload);
      	console.log("[" + config.projectName + "] Completed minifying css files");
		});
		console.log("[" + config.projectName + "] Watching CSS files ");
	}
}