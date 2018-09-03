var gulp = require('gulp')
var watch = require('gulp-watch')

gulp.task('default',function(){

console.log ("you created gulp task");

});


gulp.task('html', function(){

  console.log(" Imagin something usefull being done to you HTML here.");
});

gulp.task('watch', function(){

watch('./app/index.html', function () {

  gulp.start('html');

  });
});
