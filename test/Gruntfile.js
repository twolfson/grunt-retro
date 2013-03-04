module.exports = function (grunt) {
  // // Load in grunt-retro
  // grunt = require('../tasks/retro')(grunt);

  // // Load in common config
  // grunt = require('./grunt.common.js')(grunt);

  // Set up grunt 0.4 specific tests
  // var _ = grunt.utils._,
  var _ = grunt.util._,
      gruntConfig = grunt.config,
      // echoDest = gruntConfig.get('echo-dest');
      echoDest = {};
  grunt.initConfig({
    'pkg': require('../package.json')
  });
  gruntConfig.set('echo-dest', _.extend(echoDest, {
    '<%= pkg.name %>.js': 'actual/dest_template.txt'
  }));

  // Add nodeunit config
  grunt.config.set('nodeunit', {
    common: 'retro_test.js',
    '0.4': '0.4_test.js'
  });

  // Load in grunt-contrib-nodeunit
  process.chdir('..');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  process.chdir(__dirname);

  // // Set up 0.4 tasks
  // grunt.registerTask('0.4-test', '');

  // Register task for testing dest
  grunt.registerMultiTask('echo-dest', 'Save dest to src file', function () {
    var file = this.files[0],
        dest = file.dest,
        src = this.data.src || this.data;
    grunt.file.write(src, JSON.stringify(dest));
  });

  // Run project task then tests.
  // TEST: We can actually run single string of queries
  // grunt.registerTask('default', 'test-setup 0.4-test nodeunit');
  // grunt.registerTask('default', 'test-setup nodeunit');
  grunt.registerTask('default', ['echo-dest', 'nodeunit']);
};