var gulp = require('gulp'),
	watch = require('gulp-watch'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	useref = require('gulp-useref'),
	runSequence = require('run-sequence');


gulp.task('sass', function() {
	return gulp.src('stylesheets/sass/*.scss')
		// .pipe(watch('stylesheets/sass/*.scss'))
		.pipe(sass().on('error', sass.logError))
		.pipe(minifycss())
		.pipe(gulp.dest('stylesheets/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});


gulp.task('concat_css', function() {
	return gulp.src('stylesheets/css/*.css')
		// .pipe(watch('stylesheets/css/*.css'))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('stylesheets/dist'));
});


// https://css-tricks.com/gulp-for-beginners/
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
	})
});


gulp.task('useref', function() {
	return gulp.src('index.html')
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});


gulp.task('watch', ['browserSync', 'sass', 'concat_css'], function() {
	gulp.watch('stylesheets/sass/*.scss', ['sass']);
	gulp.watch('stylesheets/sass/*.css', ['concat_css']);
	gulp.watch('./**/*.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('default', function() {
	runSequence(['sass', 'concat_css', 'useref', 'browserSync', 'watch']);
});