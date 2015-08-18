var gulp = require('gulp');
var resizeImg = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');


// // ================ For Project 1 ================
//
// // Resize the pizzaria.jpg to the size I need for index.html
// // If I look actual size used in Chrome console, it's 115 x 75 px
// gulp.task('resizeImg', function () {
//   gulp.src('./src/views/images/pizzeria.jpg')
//     .pipe(resizeImg({
//       width : 115,
//       height: 75
//     }))
//     .pipe(gulp.dest('./dist/img'));
// });
//
// // Minify CSS
// gulp.task('minicss', function() {
//   gulp.src('./src/css/*.css')
//     .pipe(minifyCss())
//     .pipe(gulp.dest('./dist/css'));
// });
//
// // Minify JavaScript
// gulp.task('minijs', function() {
//   gulp.src('./src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/js'));
// });
//
// // Minify HTML
// gulp.task('minihtml', function() {
//   gulp.src('./src/*.html')
//     .pipe(minifyHTML())
//     .pipe(gulp.dest('./dist'));
// });
//
// gulp.task('default', ['resizeImg', 'miniimg', 'minicss', 'minijs', 'minihtml'], function() {
//   // watch for HTML changes
//   gulp.watch('./src/*.html', function() {
//     gulp.run('minihtml');
//   });
// });



// ================ For Project 2 ================
// Resize pizzeria.jpg as project 1
gulp.task('resizeImg1', function () {
  gulp.src('./src/views/images/pizzeria.jpg')
    .pipe(resizeImg({
      width : 573,
      height: 430,
      quality: 1
    }))
    .pipe(gulp.dest('./dist/views/images'));
});

// Resize pizza.png as project 1
gulp.task('resizeImg2', function () {
  gulp.src('./src/views/images/pizza.png')
    .pipe(resizeImg({
      width : 163,
      height: 213
    }))
    .pipe(gulp.dest('./dist/views/images'));
});

// Minify CSS
gulp.task('minicss', function() {
  gulp.src('./src/views/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/views/css'));
});

// Minify JavaScript
gulp.task('minijs', function() {
  gulp.src('./src/views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/views/js'));
});

// Minify HTML
gulp.task('minihtml', function() {
  gulp.src('./src/views/pizza.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('default', ['resizeImg1', 'resizeImg2', 'miniimg', 'minicss', 'minijs', 'minihtml'], function() {
  // watch for HTML changes
  gulp.watch('./src/views/pizza.html', function() {
    gulp.run('minihtml');
  });
});
