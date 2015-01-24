var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade');

var paths = {
  styl: ['./stylus/*.styl'],
  jade: ['./*.jade']
};

gulp.task('styl', function () {

  gulp.src(paths.styl)
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('./dist/css'));

});


gulp.task('jade', function () {
  gulp.src(paths.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {

  gulp.watch(paths.styl, ['styl']);
  gulp.watch(paths.jade,['jade']);

});

gulp.task('run', ['jade', 'styl', 'watch']);