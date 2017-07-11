'use strict';

/* eslint-env node */

const eslint = require('gulp-eslint');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const lintable = [
  'bin/www',
  '**/*.js',
  'gulpfile.js',
  'test/**/*.js',
  '!node_modules/**',
];

gulp.task('default', ['watch', 'nodemon']);
gulp.task('lint', ['eslint', 'watch']);

gulp.task('eslint', () =>
  gulp.src(lintable)
  .pipe(eslint())
  .pipe(eslint.format())
  .on('error', (error) => {
    console.error(error.toString()); // eslint-disable-line no-console
    this.emit('end');
  })
);

gulp.task('nodemon', () => nodemon({
  script: 'bin/www',
  watch: ['app.js', 'routes/**/*.js']
}));

gulp.task('watch', () => {
  gulp.watch([
    'bin/www',
    '**/*.js',
    'gulpfile.js',
    'test/**/*.js',
  ], ['eslint']);
});
