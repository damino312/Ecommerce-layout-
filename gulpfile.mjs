import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import rigger from 'gulp-rigger';
import imagemin from 'gulp-imagemin';

function buildStyles() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}

function imageImport() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));
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

function watchFiles() {
  gulp.watch('./src/scss/**/*.scss', buildStyles);
  gulp.watch('./src/pages/**/*.html', htmlImport);
  gulp.watch('./src/js/**/*.js', jsImport);
  gulp.watch(['./src/images/**/*.svg', './src/images/**/*.png', './src/images/**/*.svg', './src/images/**/*.jpg'], imageImport);
}

export const build = gulp.series(buildStyles, gulp.parallel(htmlImport, jsImport, imageImport));
export const watch = gulp.series(build, watchFiles);
export default build;