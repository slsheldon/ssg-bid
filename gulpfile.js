var gulp = require('gulp'),
    developmentTask = require('gbif-ssg');

global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
}

gulp.task('development', developmentTask);

//specifies the default set of tasks to run when you run `gulp`.
gulp.task('default', ['development']);