const gulp = require("gulp");
const connect = require("gulp-connect");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require('sass'));
const cssmin = require("gulp-cssmin");
gulp.task("sayhi", async () => {
    console.log("hello gulp");
});
gulp.task("connect", async () => {
    connect.server({
        livereload: true
    });
});
gulp.task("html", async () => {
    gulp.src(["./src/**/*.html"])
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload());
});
gulp.task("javascripts", async () => {
    gulp.src(["./src/javascripts/**/*.js"])
        .pipe(gulp.dest("./dist/javascripts"))
        .pipe(connect.reload());
});
gulp.task("javascripts-babel", async () => {
    gulp.src(["./src/javascripts/**/*.js"])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/javascripts"))
        .pipe(connect.reload());
});
gulp.task("scss", async () => {
    gulp.src(["./src/scss/**/*.scss"])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./dist/css/"))
        .pipe(connect.reload());
});
gulp.task("font", async () => {
    gulp.src(["./src/font/*.*"])
        .pipe(gulp.dest("./dist/font/"))
        .pipe(connect.reload());
});
gulp.task("img", async () => {
    gulp.src(["./src/img/*.*"])
        .pipe(gulp.dest("./dist/img/"))
        .pipe(connect.reload());
});
gulp.task("watch", async () => {
    gulp.watch(["./src/**/*.html"], gulp.parallel("html"));
    gulp.watch(["./src/javascripts/**/*.js"], gulp.parallel("javascripts"));
    gulp.watch(["./src/scss/**/*.scss"], gulp.parallel("scss"));
    gulp.watch(["./src/font/*.*"], gulp.parallel("font"));
    gulp.watch(["./src/img/*.*"], gulp.parallel("img"));
});

gulp.task("default", gulp.series("html", "scss", "javascripts", "font","img", gulp.parallel("connect", "watch")));