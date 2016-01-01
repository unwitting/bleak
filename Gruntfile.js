module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      compiled: {
        src: 'assets/compiled/css/*.css'
      }
    },

    sass: {
      options: {
        sourcemap: 'none'
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: 'assets/compiled/css',
          ext: '.css'
        }]
      },
      prod: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: 'assets/compiled/css',
          ext: '.css'
        }]
      }
    },

    watch: {
      css: {
        files: ['src/scss/**/**.scss'],
        tasks: ['css-dev'],
        options: {
          atBegin: true,
          interrupt: true
        }
      }
    }

  });

  grunt.registerTask('css-dev', ['sass:dev']);
  grunt.registerTask('css-prod', ['sass:prod', 'postcss:compiled']);

  grunt.registerTask('prod', ['css-prod']);

  grunt.registerTask('default', ['watch:css']);

};
