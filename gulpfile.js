var gulp = require("gulp"),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');


//sass转义
gulp.task('scss', function() {
	 var processors = [
        autoprefixer({
            browsers: 'last 1 version'
        }),
        pxtorem({
            replace: true
        })
    ];
    return gulp.src('./css/*.scss')
    	.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});
gulp.task('dev', function() {
	 var processors = [
        autoprefixer({
            browsers: 'last 1 version'
        }),
        pxtorem({
            replace: true
        })
    ];
    return gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});
gulp.task("watch", function() {
    gulp.watch('./css/*.scss', ['scss']);
});

gulp.task("default",["watch"]);


gulp.task('less', function () {
    gulp.src('less/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watch-less', function () {
    gulp.watch('less/*.less', ['less']);
});



// 开发环境执行 gulp 测试和线上环境执行gulp dev
//删除自动生成的文件执行 gulp clean
