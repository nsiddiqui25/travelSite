var   gulp = require('gulp'),
postCSS = require('gulp-postcss'),
autoPrefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/style.css')
      .pipe(postCSS([cssImport, cssVars, nested, autoPrefixer]))
      .pipe(gulp.dest('./app/temp/styles/'));
});