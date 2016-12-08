var URL = 'diweb/ejercicios/ud_2/um-pao/dist/';

var gulp = require('gulp'),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    postcss = require('gulp-postcss'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    del = require('del');
    jade = require('gulp-jade');
    data = require('gulp-data');
    path = require('path');


// Process CSS
gulp.task('css', function() {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']})
    ];
    return gulp.src('./src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(plumber())
	    .pipe(gulp.dest('./dist/'))
        .pipe( browserSync.stream() );
});


// Process Javascript
gulp.task('js', function(){
    return gulp.src('./src/js/main.js')
        .pipe(plumber())
        .pipe(webpackStream(require('./webpack.config.js'), webpack))   
        .pipe(gulp.dest('./dist/'))
        .pipe( browserSync.stream() );

});


// Process Jade to HTML
gulp.task('html', function() {
    // Copy all HTML files to dist folderp
    return gulp.src('./src/*.jade')
        .pipe(data( function(file) {
            return require('./src/data/' + path.basename(file.path, '.jade') + '.json');
        }))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./dist/'))
        .pipe( browserSync.stream() );
});


// Copy assets
gulp.task('assets', function() {
    // Copy all HTML files to dist folder
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'))
        .pipe( browserSync.stream() );
});


// Static server
gulp.task('browser-sync', function() {
    browserSync({
        proxy: URL,
        notify: false
    });
});

// Watch
gulp.task('watch', function() {
    // Watch .css files
    gulp.watch('./src/**/*.scss', ['css']);

    // Watch .js files
    gulp.watch('./src/**/*.js', ['js']);

    // Watch .jade files
    gulp.watch('./src/**/*.jade', ['html']);

});


// Clean dist
gulp.task('clean', function() {
	return del(['dist/**/*']);
});

// Default
gulp.task('default', function() {
  runSequence(['html', 'css', 'js', 'assets', 'browser-sync', 'watch']);
});