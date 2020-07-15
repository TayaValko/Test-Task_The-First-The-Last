
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
const image = require('gulp-image');

const jsFiles = [
    './app/js/scripts.js'
 ]


function styles() {
    return gulp.src('app/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
}
function images() {
    return gulp.src('app/img/*')
    //.pipe(image())
    .pipe(gulp.dest('./dist/img'));
}
function fonts() {
    return gulp.src('app/font/**')
    .pipe(gulp.dest('./dist/font'));
}
function scripts() {
    return gulp.src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(uglify({
       toplevel: true
    }))
    .pipe(gulp.dest('./dist/js'))
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('fonts', fonts);

  gulp.task('default', gulp.parallel('styles', 'scripts', 'images', 'fonts'));