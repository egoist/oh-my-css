var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    highlight = require('gulp-highlight'),
    jade = require('gulp-jade'),
    nib = require('nib'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename')

var paths = {
  site: ['./site/stylus/*.styl', './site/stylus/extra/*.styl'],
  styl: ['./stylus/*.styl'],
  stylMain: ['./stylus/ohmycss.styl', './stylus/ohmycss.lite.styl'],
  jade: ['./*.jade']
};

gulp.task('styl', function () {

  gulp.src(paths.stylMain)
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'))

});

gulp.task('site', function () {

  gulp.src(paths.site)
    .pipe(stylus({
      compress: false,
      use: nib(),
      import: ['nib']
    }))
    .pipe(gulp.dest('./site/css'));

});


gulp.task('jade', function () {
  gulp.src(paths.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(highlight())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {

  gulp.watch(paths.styl, ['styl']);
  gulp.watch(paths.jade,['jade']);
  gulp.watch(paths.site,['site']);

});

gulp.task('default', ['jade', 'styl', 'site', 'watch']);