
var   gulp = require('gulp'),
      watch = require('gulp-watch'),
      postCSS = require('gulp-postcss'),
      autoPrefixer = require('autoprefixer'),
      cssVars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssImport = require('postcss-import');

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
   watch('./app/index.html', function() {
      gulp.start('html');
   });

   watch('./app/assets/styles/**/*.css', function() {
      gulp.start('styles');
   });
});