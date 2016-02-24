var gulp  = require('gulp');
var babel = require('gulp-babel');
var open = require('gulp-open');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('es6', function () {
  return gulp.src('./public/src/*.jsx')
        .pipe(babel())
        .pipe(gulp.dest('./public/build'));
});

gulp.task("compress", ["es6"], function () {
  return gulp.src('./public/build/!(*.min).js')
      .pipe(uglify())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest('./public/build'))
});

gulp.task('open', ['compress'], function(){
  return gulp.src('./public/index.html')
        .pipe(open(), {app: 'google-chrome'});
});

gulp.task('server', function () {
  gulp.src('public')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
});

gulp.task('default', ['compress']);
