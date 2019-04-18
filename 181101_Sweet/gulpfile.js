var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// var browserSync = require('browser-sync');
// var jade = require('gulp-jade');
// var sass = require('gulp-sass');
// var plumber = require('gulp-plumber');
// var postcss = require('gulp-postcss');
var jsonServer = require("gulp-json-srv");
var server = jsonServer.create();

gulp.task('copyHTML', function () {
  return gulp.src('./source/**/*.html')
    .pipe(gulp.dest('./public/'))
})

gulp.task('jade', function () {
  // var YOUR_LOCALS = {};
  gulp.src('./source/admin/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public/admin'))

  gulp.src('./source/*.jade')
    .pipe($.plumber())
    .pipe($.data(function () {
      var productData = require('./source/data/db.json');
      var source = {
        'productData': productData,
      };
      return source;
    }))
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public'))
});

gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    //編譯完成
    .pipe(gulp.dest('./public/css'));

});
gulp.task('adminSass', function () {
  return gulp.src('./source/admin/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    //編譯完成
    .pipe(gulp.dest('./public/admin/css'));

});


gulp.task("start", function () {
  return gulp.src("db.json")
    .pipe(server.pipe());
});

gulp.task('watch', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
  gulp.watch('./source/helpers/**/*.scss', ['sass']);
  gulp.watch('./source/**/*.jade', ['jade']);
  gulp.watch('./source/admin/scss/**/*.scss', ['adminSass']);
  gulp.watch('./source/admin/helpers/**/*.scss', ['adminSass']);
  gulp.watch('./source/admin/**/*.jade', ['jade']);

});

gulp.task('deploy', function () {
  return gulp.src('./public/**/*')
    .pipe($.ghPages());
});

// gulp.task('browserSync', function () {
//     browserSync.init({
//       server: { baseDir: './public' },
//       reloadDebounce: 2000
//     })
//   });

gulp.task('default', ['sass', 'jade', 'watch','start'])