var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', function(){
	gulp.watch('./scss/**/*.scss', function(event){
		gulp.src(event.path)
			.pipe(sass({outputStyle: 'expanded'}))
			.pipe(gulp.dest('./css'));
	});
});




