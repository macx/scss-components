module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      files: [
        'tests/**'
      ],
      tasks: ['default']
    },
    sass: {
      test: {
        options: {
          style: 'expanded',
          compass: true
        },
        files: [
          {
            expanded: true,
            src: ['tests/assets/scss/application.scss'],
            dest: 'tests/assets/stylesheets/application.css',
            filter: 'isFile'
          }
        ]
      }
    },
    bumpup: ['package.json', 'bower.json'],
    tagrelease: {
      file: 'package.json',
      commit:  true,
      message: 'Release %version%',
      prefix:  '',
      annotate: false
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-bumpup');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('release', function (type) {
    type = type ? type : 'patch';
    grunt.task.run('bumpup:' + type);
    grunt.task.run('tagrelease');
  });
};