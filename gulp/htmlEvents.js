var gulp = require('gulp'),
   config = require("./config"),
   gulpWatch = require('gulp-watch');
   
module.exports = {
	copy:function(){
  		gulp.src(config.src.html).pipe(gulp.dest(config.dest.template)).on('end',function(){
      	console.log("Completed copying template files");
      });
	},
	watch:function(browserSync){
		var self = this;
		// watching all the template files as well as the main index file.
		gulpWatch(config.watch.html, config.watch.options).on(config.watch.event,function(event){
			self.copy();
			browserSync.reload();   
      	console.log("Completed copying template files");    
		});
		gulpWatch('./index.html', { ignoreInitial: false }).on(config.watch.event, browserSync.reload);	
		console.log("Watching Templates & index.html files ");	
	}
}