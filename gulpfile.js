//目的:写gulp任务
//任务1：实现sass编译
//1.引入包,返回的是对象或者方法
var gulp = require("gulp");
var sass = require("gulp-sass");
//2.gulp开启任务 gulp.task()
gulp.task("compileSass",function(){
    //3.执行gulp工作流程
    //（1）通过gulp.src() 拿到文件流
    // gulp.src(["./src/sass/**/*.scss","!./src/sass/var.scss"])
    gulp.src(["./src/sass/**/*.scss"])
    //(2) gulp.pipe()对文件流进行运输
    //(3) pipe(参数) 在运输过程中对文件流进行的操作
    .pipe(sass({outputStyle:"expanded"}).on('error', sass.logError))
    //(4) gulp.dest() 方法把文件流写入到文件夹中
    .pipe(gulp.dest("./src/css/"))
})


// ../ 返回上一层   ./当前目录
//任务2：监听某个任务
gulp.task("jt",function(){
    gulp.watch("./src/sass/**/*.scss",["compileSass"]);
})


// 任务3：编译bootstrap的css
gulp.task("bootstrap",function(){
    //3.执行gulp工作流程
    //（1）通过gulp.src() 拿到文件流
    // gulp.src(["./src/sass/**/*.scss","!./src/sass/var.scss"])
    gulp.src(["./src/lib/bootstrap-sass-3.3.7/assets/stylesheets/*.scss"])
    //(2) gulp.pipe()对文件流进行运输
    //(3) pipe(参数) 在运输过程中对文件流进行的操作
    .pipe(sass({outputStyle:"compressed"}).on('error', sass.logError))
    //(4) gulp.dest() 方法把文件流写入到文件夹中
    .pipe(gulp.dest("./src/css/"))
})


// 任务4：合并js，并压缩js
var uglify = require("gulp-uglify");
var pump = require("pump");
var concat  = require("gulp-concat");
var rename = require("gulp-rename");
gulp.task("js",function(cb){

    pump([
            gulp.src("./src/js/**/*.js"),
            // 合并
            concat('all.js'),
            gulp.dest("./dist/js/"),
            //压缩 **.min.js
            uglify(),
            rename({
                suffix: ".min",
            }),
            gulp.dest("./dist/js/")
        ],
        cb
        );
});


var browserSync = require("browser-sync");
gulp.task('server',()=>{
    browserSync({
        // 服务器路径
        // server:'./src/',
        // 代理服务器
        proxy:'http://localhost:1806',
        // 端口
        port:666,
        // 监听文件修改，自动刷新
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });
    // 监听sass文件修改，并自动编译
    gulp.watch('./src/sass/*.scss',['compileSass']) 
})

// 