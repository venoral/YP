'use strict'

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    server = require('gulp-server-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require("gulp-babel"),
    rename = require('gulp-rename'),
    cur_ip = require('os').networkInterfaces().en0[1].address;


gulp.task('default', ['es6', 'css', 'server'] , function() {
    gulp.watch(['pubilc/css/style.scss', 'pubilc/css/common.scss'], ['css'])
        .on('change', function(){
            console.log('\x1b[32m', 'sass rebuild success\n');
        });

    gulp.watch(['pubilc/js/yp.js'], ['es6'])
        .on('change', function(){
            console.log('\x1b[32m', 'es6 rebuild success\n');
        });
});

gulp.task('css', function() {
    gulp.src('pubilc/css/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('pubilc/css/'));
});

gulp.task('server', function() {
    gulp.src('./')
        .pipe(server({
            host: cur_ip,
            directoryListing: {enable: true},
            defaultFile: 'index.html',
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                    cb( !(/node_modules/.test(filePath)) );
                }
            }
        }))
});

gulp.task('es6', function(){
    gulp.src('pubilc/js/yp.js')
        .pipe(babel())
        .pipe(rename('yp.es5.js'))
        .pipe(gulp.dest('pubilc/js/'));
});
