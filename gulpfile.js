var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var paths = {
  javascripts: ['lib/**/*.jsx', 'lib/**/*.js'],
};

gulp.task('build', function () {
  browserify({
    entries: 'lib/index',
    extensions: ['.jsx', '.js'],
    debug: true
  })
  .bundle()
  .pipe(source('react-timeline-slider.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.javascripts, ['build']);
});

gulp.task('default', ['build', 'watch']);
