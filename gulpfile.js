var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

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
  .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch(paths.javascripts, ['build']);
});

gulp.task('publish:npm', function() {
  gulp.src(['lib/**/*.js', 'lib/**/*.jsx'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist-npm'));
});

gulp.task('publish:bundle', function() {
  browserify({
    entries: 'lib/index',
    extensions: ['.jsx', '.js'],
    debug: false
  })
  .external('react')
  .external('react-dom')
  .external('underscore')
  .external('d3')
  .bundle()
  .pipe(source('react-timeline-slider.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('publish', ['publish:npm', 'publish:bundle']);
gulp.task('default', ['build', 'watch']);
