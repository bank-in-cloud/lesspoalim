'use strict';

var glob = require('glob');
var globJavascripts = require('./globs/javascripts');
var globCss = require('./globs/css');

/**
 * This project is library project, and thats the reason we need special logic for static assets
 * Instead of using css, all css are complied from less
 */
module.exports = function () {
    var assets = {};

    // javascript libraries files
    var jsLibrariesFiles = [];

    var list = globJavascripts.dependencies.min;
    for (var i = 0; i < list.length; i++) {
        jsLibrariesFiles = jsLibrariesFiles.concat(glob.sync(list[i], {cwd : globJavascripts.cwd}));
    }

    console.log(jsLibrariesFiles);

    assets.jsLibrariesFiles = jsLibrariesFiles;

    // css files
    var cssFiles = [];

    list = globCss.globs;
    for (var i = 0; i < list.length; i++) {
        cssFiles = cssFiles.concat(glob.sync(list[i], {cwd : globCss.cwd}));
    }

    console.log(cssFiles);
    assets.cssFromLess = cssFiles;

    return assets;
}