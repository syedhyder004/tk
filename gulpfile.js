process.argv.push('--silent');
// node_modules
var browserify = require('browserify'),
   gulp = require('gulp'),
   browserSync = require('browser-sync').create(),
   del = require('del');
gulp.isSilent;
// project gulp related files
var config = require("./gulp/config"),
   cssEvents = require("./gulp/cssEvents"),
   jsEvents = require('./gulp/jsEvents'),
   htmlEvents = require('./gulp/htmlEvents');

var gulps = require("gulp-series");

  gulps.registerTasks({
    "del": (function(done) {
      del(config.clean);
      console.log("[" + config.projectName + "] Clean up completed");
      done();
    }),
    "jsMin": (function(done) {
      jsEvents.copy(done);
    }),
    "cssMin": (function(done) {
      cssEvents.copy(done);
    }),
    "fonts": (function(done){
      gulp.src(config.fonts.path).pipe(gulp.dest(config.fonts.dest));
      done();
    }),
    "copyTemplates": (function(done){
      htmlEvents.copy(done);
    }),
    "watcher":(function(done){
      // all file watchers for the dependent types
      htmlEvents.watch(browserSync);
      cssEvents.watch(browserSync);
      jsEvents.watch(browserSync);
      done();      
    }),
    "initBrowserSync":(function(){
      console.log("[" + config.projectName + "] Completed all tasks");
      console.log("[" + config.projectName + "] Starting live reload @localhost:" + config.port);
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
    })
  });

gulps.registerSeries("default", ["watcher","del", "jsMin","cssMin","fonts","copyTemplates","initBrowserSync"]);

