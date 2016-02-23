// http://www.bebetterdeveloper.com/coding/es6-react-babel.html

var gulp  = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');
var open = require('gulp-open');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('transform', function () {
  return gulp.src('./public/src/*.js')
        .pipe(react({harmony: false, es6module: true}))
        .pipe(gulp.dest('./public/build'));
});

gulp.task('es6', ['transform'], function () {
  return gulp.src('./public/build/*.js')
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

gulp.task('default', ['compress']);
