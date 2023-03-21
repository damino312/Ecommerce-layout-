'use strict';

var rigger = require('gulp-rigger');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const { watch, series } = require('gulp');

function buildStyles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
};



function htmlImport() {
  return gulp.src("./src/pages/**/*.html")
    .pipe(rigger())
    .pipe(gulp.dest('./public/pages'));
}

function jsImport () {
  return gulp.src("./src/js/**/*.js")
  .pipe(gulp.dest('./public/js'));
}


exports.buildStyles = buildStyles;
exports.watcher = function () { // следит за изменениями в папке sass  
  watch('./src/scss/**/*.scss',{ ignoreInitial: false },buildStyles); //выполняет при изменении
  watch('./src/pages/**/*.html',{ ignoreInitial: false }, htmlImport);//выполняет при изменении
  watch('./src/js/**/*.js',{ignoreInitial: false}, jsImport)
};
