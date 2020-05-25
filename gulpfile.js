const {
  src,
  dest,
  watch
} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

function bs() {
  serveSassAndCompile();
  // minifyJS();
  // minifyHTML();
  // compressPNG();
  // destCSS();
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
  watch("src/*.html").on('change', browserSync.reload);
  watch("src/sass/**/*.sass").on('change', serveSassAndCompile);
  watch("src/sass/**/*.scss").on('change', serveSassAndCompile);
  watch("src/js/*.js").on('change', browserSync.reload);
}

function serveSassAndCompile() {
  return src('src/sass/**/*.sass', 'src/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function minifyJS() {
  return src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(minify())
    .pipe(dest('dist/js'));
}

function minifyHTML() {
  return src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'));
}

function compressPNG() {
  return src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'xTX3St7jj6CL0Dz5D5Zy822V0G6sNhHK',
      sigFile: 'images/.tinypng-sigs',
      log: true
    }))
    .pipe(dest('dist/img'));
}

function destCSS() {
  return src('src/css/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('dist/css'));
}

exports.default = bs;