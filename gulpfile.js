var browserify = require('browserify'),
gulp = require('gulp'),
source = require('vinyl-source-stream'),
minify = require('gulp-minify'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch'),
del = require('del'),
concatCss = require('gulp-concat-css'),
gutil = require('gulp-util'),
babel = require('gulp-babel'),
sourcemaps = require('gulp-sourcemaps'),
config = require("./gulp/config");

var browserifyFun = function(callback){
  console.log(config);
  return browserify({
    entries:'./app/js/init.js',
    transform: ['require-globify']
  })
  .bundle()
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

      
      if(!browserSync.active){
        browserSync.init({
          port:config.port,
          server: {
            baseDir: "./"
          },
          logPrefix: config.projectName,
          logFileChanges: true,
          cors:true,
          notify: false
        });
      }
    });
  };

  gulp.task('browserify', function() {
    return browserifyFun();
  });

  gulp.task('watch',function(){
    watch(config.watch.js, config.watch.options).on(config.watch.event,function(event){
      browserifyFun().on('end',browserSync.reload);       
    });

    watch(config.watch.html, config.watch.options).on(config.watch.event,function(event){
      gulp.src(config.watch.html).pipe(gulp.dest("dist/views/"));
      browserSync.reload();       
    });

    watch('./index.html', { ignoreInitial: false }).on(config.watch.event, browserSync.reload);

    watch(config.watch.css,config.watch.options).on(config.watch.event,function(event){ 
      // insert from module
    });
  });

  gulp.task("copyTemplates",function(){
    gulp.src(config.src.html).pipe(gulp.dest(config.dest.template));
  });

  gulp.task('clean', function () {
    return del(config.clean);
  });


  gulp.task('cssMin', function () {
    //insert from module
  });

  gulp.task('fonts', function() {
    return gulp.src(config.fonts.path)
    .pipe(gulp.dest(config.fonts.dest))
  })

  gulp.task("run",["clean","browserify","copyTemplates","cssMin","fonts","watch"]);

  gulp.task("default",function(){
    console.log("-----------------------------------------------------------");
    console.log("Default gulp task is not defined");
    console.log("You need to run \"gulp run\" inorder to run the application");
    console.log("-----------------------------------------------------------");
  })