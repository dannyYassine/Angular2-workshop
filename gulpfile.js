/**
 * Created by dannyyassine on 2016-11-22.
 */

var gulp = require('gulp');
var shell = require('gulp-shell');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

// Load tsconfig file
var tsProject = ts.createProject('tsconfig.json');

gulp.task('serve', function () {

});

gulp.task('compile', function () {
    return gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('../dist/'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('cs', function () {
    return gulp.src('api/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('../api/'))
        .pipe(gulp.dest('api/'));
});

gulp.task('deploy', ['compile'], shell.task([
    'eb deploy --verbose'
]));

gulp.task('default', ['deploy'], function() {
    console.log("Deployed!");
});
