var gulp = require('gulp'),
    developmentTask = require('gbif-ssg'); //for production
    //developmentTask = require('../ssg/index.js'); //easier when developing the core. For testing only

global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

gulp.task('development', developmentTask);

//specifies the default set of tasks to run when you run `gulp`.
gulp.task('default', ['development']);