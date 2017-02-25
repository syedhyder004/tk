// node_modules
var browserify = require('browserify'),
   gulp = require('gulp'),
   browserSync = require('browser-sync').create(),
   del = require('del');

// project gulp related files
var config = require("./gulp/config"),
   cssEvents = require("./gulp/cssEvents"),
   jsEvents = require('./gulp/jsEvents'),
   htmlEvents = require('./gulp/htmlEvents');


// all file watchers for the dependent types
htmlEvents.watch(browserSync);
cssEvents.watch(browserSync);
jsEvents.watch(browserSync);

// cleaning up the dist folder just to make sure 
// the files are deployed correctly.
gulp.task('clean', function () {
   del(config.clean);
});

// fonts are moved to the respective folder.
gulp.task('fonts', function() {
   gulp.src(config.fonts.path)
      .pipe(gulp.dest(config.fonts.dest))
});

// minifiying css
gulp.task('cssMin', function () {
   return cssEvents.copy();   
});

// minifying js into single file
// TODO add source map files
gulp.task('jsMin', function() {
   return jsEvents.copy();
});

// copying all the template filed to the dist folder 
gulp.task("copyTemplates",function(){
   return htmlEvents.copy();
});

// final gulp tasks
gulp.task("run",["clean","jsMin","cssMin","copyTemplates","fonts"],function(){
   console.log("Completed all tasks");
   console.log("Starting live reload @localhost:" + config.port);
   // once all the tasks are completed browser sync will be starting localhost:@port
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
});

gulp.task("default",function(){
  console.log("-----------------------------------------------------------");
  console.log("Default gulp task is not defined");
  console.log("You need to run \"gulp run\" inorder to run the application");
  console.log("-----------------------------------------------------------");
});