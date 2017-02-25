var gulp = require('gulp'),
   concatCss = require('gulp-concat-css'),
   config = require("./config"),
   gulpWatch = require('gulp-watch');

module.exports = {
	copy:function(){
   	gulp.src(config.src.css)
        .pipe(concatCss(config.fileNames.css))
        .pipe(gulp.dest(config.dest.css)).on('end',function(){
      		console.log("Completed minifying css files");
      	});
	},
	watch:function(browserSync){
		var self = this;
		// watching all the css files.
		gulpWatch(config.watch.css,config.watch.options).on(config.watch.event,function(event){ 
			self.copy().on('end',browserSync.reload);
      	console.log("Completed minifying css files");
		});
		console.log("Watching CSS files ");
	}
}