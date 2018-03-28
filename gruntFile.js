'use strict';

const path = require('path');

module.exports = function (grunt) {

	const
		port = 8888,
		watchPort = 35799;

    grunt.initConfig({

        watch: {
			html: {
				files: ['tests/*.html'],
				tasks: []
			},
            scripts: {
                files: ['src/*.js'],
                tasks: []
            },
            options: {
                livereload: watchPort
            }
        },

        'http-server': {
            main: {
                root: '.',
                port: port,
                host: '0.0.0.0',
                cache: -1,
                showDir: true,
                autoIndex: true,
                ext: "html",
                runInBackground: false
            }
        },

        concurrent: {
            target: {
                tasks: ['watch', 'http-server'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    // The general task: builds, serves and watches
    grunt.registerTask('dev', function (which) {
        grunt.task.run('concurrent:target');
    });

    // alias for server
    grunt.registerTask('serve', function (which) {
        grunt.task.run('http-server');
    });

	grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
};