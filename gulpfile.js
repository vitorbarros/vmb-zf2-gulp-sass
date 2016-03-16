var gulp = require('gulp');
sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer');
cssnano = require('gulp-cssnano');
uglify = require('gulp-uglify');
rename = require('gulp-rename');
concat = require('gulp-concat');
notify = require('gulp-notify');
cache = require('gulp-cache');
livereload = require('gulp-livereload');
del = require('del');


// source and distribution folder
var
    source = 'sass/src/',
    dest = 'css/';

// css source file: .scss files
var css = {
    in: source + 'css/style.scss',
    out: dest + '/',
    watch: source + 'css/**/*',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true
    }
};

// compile scss
gulp.task('sass', function () {
    return gulp.src(css.in)
        .pipe(sass(css.sassOpts))
        .pipe(cssnano())
        .pipe(gulp.dest(css.out))
        .pipe(notify({message: 'Ta compilado brow !'}))
        .pipe(livereload());
});


// Watch task
gulp.task('watch', function () {
    gulp.watch(css.in, ['sass']);
    livereload.listen();
    gulp.watch(css.watch).on('change', livereload.changed);
});

// default task
gulp.task('default', ['sass','watch']);