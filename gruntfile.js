'use strict';

module.exports = function(grunt) {

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			development : {
				options: {
					paths: ['public/customization', 'public/lib/bootstrap/less']
				},
				files: {
					'public/dist/bs_poalim.css': 'public/customization/bs_poalim.less'
				}
			}
		},
		cssjanus : {
			theme: {
				files: [{src: 'public/dist/bs_poalim.css', dest: 'public/dist/he/bs_poalim.css'}]
			}
		},
		nodemon: {
			dev: {
				script: 'server.js',
				options: {
					nodeArgs: ['--debug'],
					ext: 'js,html'
				}
			}
		},
		concurrent: {
			default: ['nodemon'],
			debug: ['nodemon'],
			options: {
				logConcurrentOutput: true,
				limit: 10
			}
		}
	});

	// Load NPM tasks
	require('load-grunt-tasks')(grunt);

	// Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	// A Task for loading the configuration object
	grunt.task.registerTask('loadConfig', 'Task that loads the config into a grunt option.', function() {
		var config = require('./config/config');
	});

	// Default task(s).
	grunt.registerTask('default', ['less', 'concurrent:default']);
};