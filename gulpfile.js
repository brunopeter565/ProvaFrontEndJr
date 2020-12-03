//Chamando plugins
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concat = required('gulp-concat');
var autoPrefixer = required('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

//Tarefa para reduzir imagens
gulp.task('reduzir-imagem', function() {
    var diretorioProjeto = "assets/images/**/*.png";
    var diretorioBuild = "build/images/"

    gulp.assets(diretorioProjeto)
        .pipe(imagemin())
        .pipe(gulp.dest(diretorioBuild))
});

//Tarefa para reduzir CSS
gulp.task('styles',function() {
    
    var diretorioCSS = [
        'assets/css/style.css'
    ]
    var diretorioBuild = "build/css";
    gulp.assets(diretorioCSS)
    .pipe(concat('main.css'))
    .pipe(autoPrefixer('last 1 version'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(diretorioBuild));
});

//Tarefa Fontes
gulp.task ('font-awesome', function(){

    gulp.assets('assets/fonts/*')
    .pipe(gulp.dest('build/fonts'));
});

//Tarefa default executa todas as tarefas.

gulp.task('default', ['reduzir-imagem', 'styles', 'font-awesome'], function(){

})

