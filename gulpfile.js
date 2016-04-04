var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var sassdoc = require('sassdoc');
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');



gulp.task('live-server', function () {
	var server = new LiveServer('server/main.js');
	server.start();
})

gulp.task('bundle',[],function(){
	return browserify({
			entries: 'app/main.jsx',
			debug: true,
		})
		.transform(reactify)
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./.tmp'));
})

//doesn't run unless you add it to the serve task
gulp.task('copy-fonts', function() {
	return gulp.src(['app/assets/fonts/**/*.{ttf,woff,woff2,eof,svg}']).pipe(gulp.dest('./.tmp/fonts/'));
});

gulp.task('sassdoc', function () {
	var options = {
		dest: './.tmp/sassdoc',
		verbose: true,
		display: {
			access: ['public', 'private'],
			alias: true,
			watermark: true,
		},
		groups: {
			'undefined': 'Ungrouped',
			foo: 'Foo group',
			bar: 'Bar group',
		},
		basePath: 'http://localhost:9001/sassdoc',
	};

	return gulp.src('./app/stylesheets/**/*.scss')
		.pipe(sassdoc(options));
});

gulp.task('styles', function() {
	return sass('./app/assets/stylesheets', { style: 'expanded' })
		.pipe(gulp.dest('./.tmp/assets/stylesheets/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./.tmp/assets/stylesheets/'));
});

gulp.task('watch', function() {
	gulp.watch('app/assets/stylesheets/**/*.scss', ['styles']);
	gulp.watch('server/**/**/*.js', ['bundle']);
	gulp.watch('app/**/**/*.{jsx,ejs,js,html}', ['bundle']);
});

gulp.task('serve', ['styles', 'bundle', 'watch', 'live-server'], function () {

})