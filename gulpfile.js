/**
 * Created by dannyyassine on 2016-11-22.
 */

var gulp = require('gulp');
var shell = require('gulp-shell');
var ts = require('gulp-typescript');

// Load tsconfig file
var tsProject = ts.createProject('tsconfig.json');

gulp.task('serve', function () {
    
});

gulp.task('compile', function () {
    return gulp.src('app/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist/'));
});

gulp.task('deploy', ['compile'], shell.task([
    'eb deploy --verbose'
]));

gulp.task('default', ['deploy'], function() {

});
