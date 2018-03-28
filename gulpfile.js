var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build:sass', function () {
  return gulp.src('./assets/style/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/style/css'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/style/sass/**/*.scss', ['build:sass']);
});
