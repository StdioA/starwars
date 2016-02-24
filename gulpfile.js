var gulp  = require('gulp');
var babel = require('gulp-babel');
var open = require('gulp-open');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('transform', function () {
	return gulp.src('./public/src/*.jsx')
				.pipe(babel())
				.pipe(gulp.dest('./public/build'));
});

gulp.task("compress", ["transform"], function () {
	return gulp.src('./public/build/!(*.min).js')
			.pipe(uglify())
			.pipe(rename({ suffix: ".min" }))
			.pipe(gulp.dest('./public/build'))
});

gulp.task('open', ['compress'], function(){
	return gulp.src('./public/index.html')
				.pipe(open(), {app: 'google-chrome'});
});

gulp.task('watch', ["compress"], function () {
	var watcher = gulp.watch('./public/src/*.jsx', ['compress']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('server', ['watch'], function () {
	gulp.src('public')
		.pipe(webserver({
			livereload: {
				enable: true,
				filter: function (filename) {
					if (filename.match(/min.js/)) {
						return false;
					}
					else {
						return true;
					}
				}
			},
			open: true
		}));
});

gulp.task('default', ['compress']);
