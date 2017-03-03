var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest(''));
});


gulp.task('watch', function() {
    gulp.watch('src/index.html', ['html']);
});

gulp.task('default', ['webserver', 'watch']);
