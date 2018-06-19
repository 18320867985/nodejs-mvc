//1. 全局安装 gulp： $ npm install --global gulp
//2. 作为项目的开发依赖（devDependencies）安装：$ npm install --save-dev gulp
//3. 在项目根目录下创建一个名为 gulpfile.js 的文件：var gulp = require('gulp');
//4. gulp.task('default', function() {
// 将你的默认的任务代码放在这
//});

var gulp = require('gulp');

var del = require("del");

var minCss = require('gulp-minify-css'); //gulp-minify-css:压缩css文件 npm install gulp-minify-css  //过时的

var minJs = require('gulp-uglify'); //压缩javascript文件  npm install gulp-uglify

/*
 * .pipe(postcss([autoprefixer]))  // 自动添加css3缀-webkit-  适合用于手机端 
 * */
var postcss=require("gulp-postcss"); // 手机端自动补全css3前缀  cnpm install --save-dev gulp-postcss
var autoprefixer = require('autoprefixer'); // npm install --save-dev autoprefixer

/*
 *	cnpm install node-sass --save-dev
 * cnpm install gulp-sass --save-dev 
 * 使用：sass().on('error', sass.logError)
 */
var sass = require('gulp-sass'); 

var connect = require('gulp-connect'); //gulp-connect 创建服务器  npm install --save-dev gulp-connect

var concat = require('gulp-concat'); //整合文件npm install --save-dev gulp-concat

var img = require('gulp-imagemin'); //gulp-imagemin:压缩png、jpj、git、svg格式图片 npm install --save-dev gulp-imagemin

var eslint = require("gulp-eslint"); // 检查es5 ees6 js gulp-eshint

/*
 * es6 转换 es5
 * $ npm install --save-dev gulp-babel babel-preset-env
 * $ npm install --save-dev gulp-babel babel-preset-es2015
 * 
 * gulp插件之-----转化es6代码到es5 取消严格模式 remove "use strict" directive
 * cnpm install babel-plugin-transform-remove-strict-mode
 */
var babel = require("gulp-babel");


// 文件路径
var paths = {

	// 原有的js库
	jsCommon: [

		//"src/js-dev/libs/prefix-css3.min.js", // pc端 自动补全css3前缀 
		
		//"src/js-dev/libs/modernizr/modernizr-2.6.2.min.js",  // modernizr  检测css3和h5
		
		"src/js-dev/libs/jq/jquery-1.11.0.min.js",  // jquery.js
		
		//"src/js-dev/libs/jq/jquery-drag.min.js",	// 拖动元素
		
		//"src/js-dev/libs/jq/jquery.touchSwipe.min.js",	//jquery.touchSwipe.min.js 
		
		//"src/js-dev/libs/jq/jquery-Effect.min.js",  		//jquery-Effect.min.js
		
		//"src/js-dev/libs/jq/jquery.superslide.2.1.1.js",  //jquery.superslide.2.1.1.js
		
		"src/js-dev/libs/vd/vd.js",  //数据验证
		
		"src/js-dev/libs/bs-3/bootstrap.js",  // bootstrap.js 3.0
		
		//"src/js-dev/libs/bs-4/bootstrap.js",  // bootstrap.js 4.0
		
		//"src/js-dev/libs/ie/respond.js",  // 兼容ie8 响应式
		
		//"src/js-dev/libs/vue/vue.min.js",  // vue.min.js

		//"src/js-dev/libs/mui/mui.js", // mui插件

		//"src/js-dev/libs/zepto/zepto.js", //z epto.js

		"src/js-dev/temp/*.js", // 合并自定义的js

	],

	/* 自定的js => 在原有的js库前执行  之后再合并所以js 
	 * 目的是为es6转e5  兼容原有的js库  取消严格模式
	 */
	jsBabel: [

		"src/js-dev/1-common/**/*.js", 		// 1.公共类库
		
		"src/js-dev/2-namespace/**/*.js", 	// 2.命名空间
		
		"src/js-dev/3-api/**/*.js", 		// 2.自定api

		"src/js-dev/4-component/**/*.js", 	// 3.公共组件

		"src/js-dev/5-modules/**/*.js" 		// 4.自定义模块

	],

	// sass文件
	scssPath: ['./src/css-dev/scss/**/*.scss'],
	
	allscss: ['./src/css-dev/scss/all.scss'],

	htmlPath: ['./html/*.html'],

}

// 测试
gulp.task('test', function() {

console.log("test")
});

// 清空目录gulp-del
gulp.task('del', function(cd) {
	// gulp.src('./dist',{read:false}).pipe(clean()); //gulp-clean

	del(["./dist"], cd); //gulp-del
});

/******发布文件*******/

gulp.task('release', ['concat'], function() {

	//**是所以文件夹
	//*.*是所以文件
	//gulp.src是查找文件
	//pipe是进入流管道
	//gulp.dest() 是复制文件

    gulp.src(['./html/*.html']).pipe(gulp.dest('./dist/html')); //复制html
	gulp.src('./public/css/**/*.*').pipe(gulp.dest('./dist/public/css'));  //复制css
	gulp.src('./public/js/**/*.*').pipe(gulp.dest('./dist/public/js/'));  //复制js
	gulp.src('./public/images/**/*.*')
	//.pipe(img())                     // 压缩图片
	.pipe(gulp.dest('./dist/public/images/')); //复制img
	
});

// 发布的合并js和css文件
gulp.task("concat", ["t_temp","css","js"]);

// 发布css
gulp.task("css",function(){
 
	// scss 合并css
	return	gulp.src(paths.allscss)
		.pipe(sass().on('error', sass.logError)) // sass编译
		.pipe(postcss([autoprefixer]))  // 自动添加css3缀-webkit-  适合用于手机端 
		.pipe(minCss("all.css")) // 压缩css文件
		.pipe(gulp.dest('./public/css'));

});

// 发布js
gulp.task("js",function(){
			 // 合并js
	return 	gulp.src(paths.jsCommon)
			.pipe(concat('all.js'))
			.pipe(minJs("all.js")) // 压缩js文件
			.pipe(gulp.dest('./public/js/'));

});

// 压缩图片
gulp.task("img",function(){
return	gulp.src('./src/images/**/*.*')
	.pipe(img())                     // 压缩图片
	.pipe(gulp.dest('./dist/public/images/')); //复制img
});


/*******************开发*************************/

// 合并js文件
gulp.task("t_minjs", ["t_temp"], function() {

	// 合并js
	gulp.src(paths.jsCommon)
		.pipe(concat('all.js'))
		//.pipe(minJs("all.js")) //压缩js文件
		.pipe(gulp.dest('./public/js/'));

	gulp.src(paths.jsBabel).pipe(connect.reload());

});


// 优先执行 合并自定js文件
gulp.task("t_temp", function() {

	// 合并js
	return gulp.src(paths.jsBabel)
		.pipe(babel()) // es6编译
		.pipe(concat('temp.js'))
		.pipe(gulp.dest('./src/js-dev/temp/'));

});


//sass合并css文件
gulp.task("t_minscss", function() {

	gulp.src(paths.allscss)
		.pipe(sass().on('error', sass.logError)) // sass编译
		.pipe(postcss([autoprefixer]))  // 自动添加css3缀-webkit-  适合用于手机端 
		//.pipe(minCss("all.css")) // 压缩css文件
		.pipe(gulp.dest('./public/css'));

	gulp.src(paths.scssPath).pipe(connect.reload());

});

//开启http服务器
gulp.task('connect', function() {
	connect.server({
		root: 'src',
		livereload: true,
		port: 8888
	});
});

/*
 * watch监听
 * gulp.watch参数说明
 * 1. gulp.watch(path,task);
 * 2.gulp.watch(path,function(){});
 */
gulp.task("watch", ['connect'], function() {

	//合拼压缩js文件
	gulp.watch(paths.jsBabel, ["t_minjs"]);

	//sass合并压缩css文件
	gulp.watch(paths.scssPath, ['t_minscss']);


	//监听html
	gulp.watch(paths.htmlPath, function() {
		//重启服务器	
		gulp.src(paths.htmlPath).pipe(connect.reload());

	});

});


/*===================其他的=========================*/

// 检查js
gulp.task('t_eslint', function() {

	gulp.src(paths.jsBabel).pipe(eslint()).pipe(eslint.format());

});



