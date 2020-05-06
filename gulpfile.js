const {
  src,
  dest,
  watch
} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function bs() {
  serveSassAndCompile();
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  watch("src/*.html").on('change', browserSync.reload);
  watch("src/sass/*.sass").on('change', serveSassAndCompile);
  watch("src/js/*.js").on('change', browserSync.reload);
}

function serveSassAndCompile() {
  return src('src/sass/*.sass')
    .pipe(sass())
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

exports.default = bs;