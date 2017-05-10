const gulp   = require('gulp');
const babel  = require('gulp-babel');
const react  = require('gulp-react');
const concat = require('gulp-concat');

gulp.task('babel', function() {
    return gulp.src('src/*.js')
            .pipe(concat('build.js'))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('dest/'));
});

gulp.task('transpileJSX', function() {
    return gulp.src('src/*.jsx')
        .pipe(babel({
            plugins: ['transform-react-jsx'],
            presets: ['es2015']            
        }))
        .pipe(gulp.dest('dest'));
});

gulp.task('default', function() { 
    gulp.watch('src/*.js', ['babel']);
    gulp.watch('src/*.jsx', ['transpileJSX']);
});