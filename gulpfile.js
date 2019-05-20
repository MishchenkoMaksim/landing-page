var gulp = require("gulp");
var sass = require("gulp-sass");


gulp.task("default", function (done) {
    console.log(10);
    done();
})


gulp.task("scss", function () {
   
    gulp.src(["./project/**/*.scss", "./project/**/*.sass"])

        .pipe(sass())
        
        .pipe(sass().on("error", sass.logError))
   
        .pipe(gulp.dest("./project"))
})


gulp.task("scss:watch", function () {
    
    gulp.watch(["./project/**/*.scss", "./project/**/*.sass"], ["scss"])
})
