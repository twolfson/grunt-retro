module.exports = function (grunt) {

  // Load in grunt-retro
  grunt.loadTasks('../tasks');

  // Project configuration.
  grunt.initConfig({
    'echo-src': {
      single: {
        src: 'test_files/file.js',
        dest: 'actual/single.txt'
      },
      multi: {
        src: ['test_files/file.js', 'test_files/file2.js'],
        dest: 'actual/multi.txt'
      },
      expansion: {
        src: ['test_files/{file,file2}.js'],
        dest: 'actual/expansion.txt'
      },
      uri: {
        src: ['http://google.com/'],
        dest: 'actual/uri.txt'
      }
    },
    test: {
      all: '*_test.js'
    }
  });

  // Register tasks for testing
  grunt.registerMultiTask('echo-src', 'Save src input to file', function () {
    // TODO: Worry about expansion and such
    var file = this.file,
        src = file.src,
        dest = this.data.dest;
    grunt.file.write(dest, JSON.stringify(src));
  });

  // Run project task then tests.
  grunt.registerTask('default', 'echo-src test');
};