var gulp   = require('gulp');
var harp   = require('harp');
var sync   = require('browser-sync').create();
var reload = sync.reload;
var surge = require('gulp-surge');
var shell  = require('gulp-shell');

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server(__dirname, {
    port: 8081
  }, function () {
    sync.init({
      proxy: 'localhost:8081',
      port: 8080,
      open: false,
      ui: {
        port: 8082
      },
      /* Hide the notification. It gets annoying */
      notify: {
        styles: ['opacity: 0', 'position: absolute']
      }
    });
    /**
     * Watch for scss changes, tell BrowserSync to refresh main.css
     */
    gulp.watch('public/**/*.{scss,sass}', function () {
      reload('main.css', {stream: true});
    });
    /**
     * Watch for all other changes, reload the whole page
     */
    gulp.watch(['public/**/*.ejs', 'public/**/*.js', 'public/**/*.json', 'public/**/*.md'], function () {
      reload();
    });
  });
});

/**
 * Serve the site in production
 */

gulp.task('production', function () {
  return gulp.src('')
    .pipe(shell([
      'NODE_ENV=production sudo harp server --port 80'
    ]));
});

/**
 * Build the Harp Site
 */
gulp.task('build', function () {
  return gulp.src('')
    .pipe(shell([
      'harp compile . dist'
    ]));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function () {
  return surge({
    project: './dist',
    domain: 'chrisalexander.me.uk'
  });
});

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);
