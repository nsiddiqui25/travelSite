
var   gulp = require('gulp'),
      watch = require('gulp-watch'),
      postCSS = require('gulp-postcss'),
      autoPrefixer = require('autoprefixer'),
      cssVars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      browserSync = require('browser-sync').create();

gulp.task('default', function(){
   console.log('Hooray! You just created a gulp task');
});

gulp.task('html', function(){
   console.log("Imagine something useful being done to HTML code here.");
});

gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/style.css')
      .pipe(postCSS([cssImport, cssVars, nested, autoPrefixer]))
      .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function(){
   browserSync.init({
      notify: false,
      server: {
         baseDir: "app"
      }
   });

   watch('./app/index.html', function() {
      browserSync.reload();
   });

   watch('./app/assets/styles/**/*.css', function() {
      gulp.start('cssInject');
   });
});

gulp.task('cssInject', ['styles'], function(){
   return gulp.src('./app/temp/styles/style.css')
      .pipe(browserSync.stream());
});