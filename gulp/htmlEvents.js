var gulp = require('gulp'),
   config = require("./config"),
   gulpWatch = require('gulp-watch');
   
module.exports = {
	copy:function(callback){
		utils.showIndicator("[" + config.projectName + "] HTML template copy started ");
  		gulp.src(config.src.html).pipe(gulp.dest(config.dest.template)).on('end',function(){
  			utils.stopIndicator();
  			callback();
      });
	},
	watch:function(browserSync){
		var self = this;
		// watching all the template files as well as the main index file.
		gulpWatch(config.watch.html, config.watch.options).on(config.watch.event,function(event){
			self.copy();
			browserSync.reload();   
      	console.log("[" + config.projectName + "] Completed copying template files");    
		});
		gulpWatch('./index.html', { ignoreInitial: false }).on(config.watch.event, browserSync.reload);	
		console.log("[" + config.projectName + "] Watching Templates & index.html files ");	
	}
}