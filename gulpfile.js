/*

=========================================================
* Volt Free - Bootstrap 5 Dashboard
=========================================================

* Product Page: https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard
* Copyright 2020 Themesberg (https://www.themesberg.com)
* License (https://themesberg.com/licensing)

* Designed and coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

*/

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');
var del = require('del');
const htmlmin = require('gulp-htmlmin');
const cssbeautify = require('gulp-cssbeautify');
var gulp = require('gulp');
const npmDist = require('gulp-npm-dist');
var sass = require('gulp-sass')(require('sass'));
var wait = require('gulp-wait');
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');

// Define paths

const paths = {
    dist: {
        base: './dist/',
        css: './dist/css',
        html: './dist/pages',
        assets: './dist/assets',
        img: './dist/assets/img',
