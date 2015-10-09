var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var paths = {
  javascripts: ['lib/**/*.jsx', 'lib/**/*.js'],
};

gulp.task('build', function () {
  browserify({
    entries: 'lib/react_timeline_slider',
    extensions: ['.jsx', '.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.javascripts, ['build']);
});

gulp.task('default', ['build', 'watch']);
