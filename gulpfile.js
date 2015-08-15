var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', function(event) {
		gulp.src(event.path)
			.pipe(sass({outputStyle: 'expanded'}))
			.pipe(gulp.dest('./css'));
	});
});

gulp.task('compile', function() {
	gulp.src(['scss/*.scss'])
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'));
});



