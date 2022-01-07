const gulp = require("gulp"),
    cleanCss = require("gulp-clean-css"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    image = require("gulp-imagemin"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass")(require('sass'));;
    connect = require('gulp-connect');



function connectserver(cb) {
    connect.server({
        root: 'src',
        livereload: true,
        port: 4000,
      });
      cb();
}
       



function html(cb) {
    gulp.src('./src/*.html')
    //   .pipe(gulp.dest('./src'))
      .pipe(connect.reload());
    cb();
}


function js(cb){
    return gulp.src(["src/assets/js/app.js"])
        .pipe(concat("app.min.js"))
        // .pipe(uglify())
        .pipe(gulp.dest("src/assets/dist/js/"))
        .pipe(connect.reload());
    cb();
}

function scss(cb){
    return gulp.src("src/assets/scss/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("app.min.css"))
        .pipe(cleanCss({compatibility: "ie8"}))
        .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
        .pipe(gulp.dest("src/assets/dist/css/"))
        .pipe(connect.reload());

    cb();
}

function imageprocess(cb) {
    gulp.src("./src/assets/img/**/*")
        .pipe(image())
        .pipe(gulp.dest("./src/assets/dist/img/"))
        .pipe(connect.reload());

    cb();
}

function fonts(cb) {
    gulp.src("src/assets/fonts/**/*")
        .pipe(gulp.dest("src/assets/dist/fonts/"))
        .pipe(connect.reload());

    cb();
}

function watch(cb) {
    gulp.watch('./src/*.html', gulp.series(html));
    gulp.watch("./src/assets/js/*.js", gulp.series(js));
    gulp.watch("./src/assets/scss/*.*", gulp.series(scss));
    gulp.watch("./src/assets/scss/components/*.*", gulp.series(scss));
    gulp.watch("./src/assets/scss/pages/*.*", gulp.series(scss));
    gulp.watch("./src/assets/img/*", gulp.series(imageprocess));
    gulp.watch("./src/assets/fonts/*", gulp.series(fonts));
    cb();
}

function service(cb) {
    const tasks = gulp.series(connectserver, watch);
    tasks();
    cb();
}


exports.default = gulp.parallel(js, scss, fonts, service);
exports.build = gulp.parallel(js, scss, imageprocess, fonts);
exports.service = gulp.parallel(connectserver, watch);