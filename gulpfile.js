var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var paths = {
  javascripts: ['lib/**/*.jsx', 'lib/**/*.js'],
};

gulp.task('build', function () {
  browserify({
    entries: ['lib/index', 'example/browserify/react'],
    extensions: ['.jsx', '.js'],
    debug: true,
    standalone: 'ReactTimelineSlider'
  })
  .transform('babelify', { 
    presets: ['es2015', 'react'],
    plugins: ['add-module-exports']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch(paths.javascripts, ['build']);
});

gulp.task('publish:npm', function() {
  gulp.src(['lib/**/*.js', 'lib/**/*.jsx'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'react'],
      plugins: ['add-module-exports']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist-npm'));
});

gulp.task('publish:bundle', function() {
  var indexFilter = filter(['*/index.js'], { restore: true });

  gulp.src(['lib/**/*.js', 'lib/**/*.jsx'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'react'],
      plugins: ['add-module-exports', 'transform-es2015-modules-amd']
    }))
    .pipe(indexFilter)
    .pipe(rename({ basename: 'main' }))
    .pipe(indexFilter.restore)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/react-timeline-slider'));
});

gulp.task('publish', ['publish:npm', 'publish:bundle']);
gulp.task('default', ['build', 'watch']);
