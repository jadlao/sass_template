'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'app/js/**/*.js',
        'app/build/app.min.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'app/build/app.min.css': [
            'app/sass/main.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'app/build/app.min.js': [
            'app/js/**/*.js'
          ]
        },
        options: {
          sourceMap: 'app/build/app.min.js.map',
          sourceMappingURL: 'app/build/app.min.js.map'
        }
      }
    },
    watch: {
      sass: {
        files: [
          'app/sass/**/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'app/js/**/*.js'
        ],
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: [
          '*.html'
        ]
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};