var gulp = require('gulp'),
    browserSynk = require('browser-sync'),
    watch = require('watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    concatCss = require('gulp-concat-css'),
    uglifycss = require('gulp-uglifycss');


gulp.task ('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    return gulp.src('app/css/*.css')
        .pipe(concatCss('main.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('browser-sync', function () {
    browserSynk({
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('watch', ['browser-sync', 'scripts', 'styles'], function () {
    gulp.watch('app/*.html', browserSynk.reload);
    gulp.watch('app/js/**/.js', browserSynk.reload);
});
