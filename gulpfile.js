var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var paths = {
  javascripts: ['assets/javascripts/**/*.jsx', 'assets/javascripts/**/*.js'],
  stylesheets: ['assets/stylesheets/**/*']
};

gulp.task('build', function () {
  browserify({
    entries: 'assets/javascripts/react_timeline',
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
