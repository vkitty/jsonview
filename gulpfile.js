const gulp = require('gulp');
const kitty = require('vkitty');
const serve = require('kitty-serve');
const zip = require('gulp-zip');

gulp.task('dev',function(){
    kitty.watch(['./src/*html','./src/main.crx','./src/manifest.json'])
        .pipe(kitty.dest('./build'))
        .pipe(kitty.cdnDest('./build/static'));

    gulp.start('copy');
    gulp.watch(['./src/js/content.js','./src/css/json.css','./src/_locales/*/*','./src/images/*/*'],function(){
        gulp.start('copy');
    });
});

gulp.task('copy',function(){
    gulp.src(['./src/js/content.js'])
        .pipe(gulp.dest('./build/static/js'));

    gulp.src('./src/css/json.css')
        .pipe(gulp.dest('./build/static/css'));


    gulp.src('./src/images/*/*')
        .pipe(gulp.dest('./build/static/images'));


    gulp.src('./src/_locales/*/*')
        .pipe(gulp.dest('./build/_locales'));
});

gulp.task('zip',function(){
    gulp.src('build/**/*')
        .pipe(zip('jsonview.zip'))
        .pipe(gulp.dest('zip'))
})