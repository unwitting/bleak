var fs = require('fs');

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass-lint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-replace');

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

    sasslint: {
      options: {
        configFile: '.sass-lint.yml'
      },
      target: ['src/scss/**/*.s+(a|c)ss']
    },

    watch: {
      css: {
        files: ['src/scss/**/**.scss'],
        tasks: ['lint-sass', 'css-dev'],
        options: {
          atBegin: true,
          interrupt: true
        }
      }
    },

    replace: {
      amppostcss: {
        options: {
          patterns: [
            {
              match: 'compiled_css',
              replacement: function () {
                return fs.readFileSync('./assets/compiled/css/post.css');
              }
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['partials/amp_style.hbs'], dest: 'partials/compiled'}
        ]
      }
    }

  });

  grunt.registerTask('css-dev', ['sass:dev', 'replace:amppostcss']);
  grunt.registerTask('css-prod', ['sass:prod', 'postcss:compiled', 'replace:amppostcss']);

  grunt.registerTask('lint-sass', ['sasslint']);
  grunt.registerTask('lint', ['lint-sass']);

  grunt.registerTask('prod', ['lint', 'css-prod']);

  grunt.registerTask('default', ['watch:css']);

};
