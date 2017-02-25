modules.export = {
	copy:function(){
		gulp.src(config.src.css)
	        .pipe(concatCss(config.fileNames.css))
	        .pipe(gulp.dest(config.dest.css)).on('end',browserSync.reload);
	},
	watch:function(){

	}
}