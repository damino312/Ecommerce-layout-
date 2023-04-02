'use strict';

import gulp from 'gulp';
const { series, parallel, src, dest, task, watch } = gulp;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import rigger from 'gulp-rigger';
import imagemin from 'gulp-imagemin';


function buildStyles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
};

function imageImport() {
  gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'))
}

function htmlImport() {
  return gulp.src("./src/pages/**/*.html")
    .pipe(rigger())
    .pipe(gulp.dest('./public/pages'));
}

function jsImport() {
  return gulp.src("./src/js/**/*.js")
    .pipe(gulp.dest('./public/js'));
}

gulp.task('watch',
  function () {
    watch('./src/scss/**/*.scss', { ignoreInitial: false }, buildStyles);
    watch('./src/scss/**/*.scss', { ignoreInitial: false }, buildStyles);
    watch('./src/pages/**/*.html', { ignoreInitial: false }, htmlImport);
    watch('./src/js/**/*.js', { ignoreInitial: false }, jsImport);
    watch(['./src/images/**/*.svg', './src/images/**/*.png', './src/images/**/*.svg', './src/images/**/*.jpg'], { ignoreInitial: false }, imageImport);
  }
);
