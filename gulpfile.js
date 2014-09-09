var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('less', function () {
  gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('img', function () {
  gulp.src('less/img/*')
    .pipe(gulp.dest('css/img'));
});

gulp.task('watch', ['less', 'img'], function () {
  gulp.watch('less/**/*.*', ['img']);
	gulp.watch('less/*.less', ['less']);
});

gulp.task('img', function () {
  gulp.src('less/img/*')
    .pipe(gulp.dest('css/img'));
});

gulp.task('minify-css', function() {
  gulp.src('css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['less', 'img']);