var gulp = require('gulp');
var resizeImg = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');


// ================ For Project 1 ================

// Resize the images to the size you need for this page
gulp.task('resizeImg', function () {
  gulp.src('./views/images/pizzeria.jpg')
    .pipe(resizeImg({
      width : 100,
      height: 75
    }))
    .pipe(gulp.dest('./dist/img'));
});

// Minify Images
gulp.task('miniimg', function() {
  gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

// Minify CSS
gulp.task('minicss', function() {
  gulp.src('./css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

// Minify JavaScript
gulp.task('minijs', function() {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Minify HTML
gulp.task('minihtml', function() {
  gulp.src('./*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['resizeImg', 'miniimg', 'minicss', 'minijs', 'minihtml'], function() {
  // watch for HTML changes
  gulp.watch('./*.html', function() {
    gulp.run('minihtml');
  });
});



// ================ For Project 2 ================
// Resize
// gulp.task('resizeImg1', function () {
//   gulp.src('./views/images/pizzeria.jpg')
//     .pipe(resizeImg({
//       width : 720,
//       height: 540
//     }))
//     .pipe(gulp.dest('./part_2_optimized/images'));
// });
//
// gulp.task('resizeImg2', function () {
//   gulp.src('./views/images/pizza.png')
//     .pipe(resizeImg({
//       width : 163,
//       height: 213
//     }))
//     .pipe(gulp.dest('./part_2_optimized/images'));
// });
//
// // Minify Images
// gulp.task('miniimg', function() {
//   gulp.src('./views/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./part_2_optimized/images'));
// });
//
// // Minify CSS
// gulp.task('minicss', function() {
//   gulp.src('./views/css/*.css')
//     .pipe(minifyCss())
//     .pipe(gulp.dest('./part_2_optimized/css'));
// });
//
// // Minify JavaScript
// gulp.task('minijs', function() {
//   gulp.src('./views/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./part_2_optimized/js'));
// });
//
// // Minify HTML
// gulp.task('minihtml', function() {
//   gulp.src('./views/pizza.html')
//     .pipe(minifyHTML())
//     .pipe(gulp.dest('./part_2_optimized'));
// });
//
//
//
// gulp.task('default', ['resizeImg1', 'resizeImg2', 'miniimg', 'minicss', 'minijs', 'minihtml'], function() {
//   // watch for HTML changes
//   gulp.watch('./views/pizza.html', function() {
//     gulp.run('minihtml');
//   });
// });
