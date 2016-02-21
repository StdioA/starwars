// http://www.bebetterdeveloper.com/coding/es6-react-babel.html

var gulp  = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');
var open = require('gulp-open');

gulp.task('transform', function () {
  return gulp.src('./public/src/*.js')
        .pipe(react({harmony: false, es6module: true}))
        .pipe(gulp.dest('./public/build'));
});

gulp.task('es6', ['transform'], function () {
  return gulp.src('./public/build/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('build', ['transform'], function(){
  return gulp.src('./public/index.html')
        .pipe(open(), {app: 'google-chrome'});
});

gulp.task('watch')

gulp.task('default', ['build']);
