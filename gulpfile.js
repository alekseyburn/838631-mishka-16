"use strict";

var gulp = require("gulp");
var del = require("del");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var htmlmin = require("gulp-htmlmin");
var csso = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var mozjpeg = require("imagemin-mozjpeg");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var uglyfly = require("gulp-uglyfly");
var babel = require("gulp-babel");
var iife = require("gulp-iife");

gulp.task("html", function () {
  return  gulp.src("source/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
})

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
})

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 80}))
    .pipe(gulp.dest("build/img"));
})

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo(),
      mozjpeg({quality: 80})
      ]))
    .pipe(gulp.dest("build/img"));
})

gulp.task("js", function () {
  return gulp.src("source/js/**/*.js")
  .pipe(sourcemap.init())
  .pipe(babel({ presets: ["@babel/preset-env"] }))
  .pipe(uglyfly())
  .pipe(iife({ useStrict: false}))
  .pipe(rename({extname: ".min.js"}))
  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("build/js"));
})

gulp.task("sprite", function() {
  return gulp.src("source/img/{icon,logo}-*.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
})

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/*.ico"
    ], {
      base: "source"
    })
  .pipe(gulp.dest("build"));
})

gulp.task("clean", function () {
  return del("build");
})

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  })

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/**/*.{jpg,png,svg}", gulp.series("webp", "images"));
  gulp.watch("source/img/{icon,logo}-*.svg", gulp.series("sprite", "refresh"));
  gulp.watch("source/*.html", gulp.series("html"));
  gulp.watch("source/js/**/*.js", gulp.series("js", "refresh"));
})

gulp.task("refresh", function (done) {
  server.reload();
  done();
})

gulp.task("build", gulp.series("clean", "copy", "html", "css", "webp", "images", "sprite", "js"));
gulp.task("start", gulp.series("build", "server"));
