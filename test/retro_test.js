var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

{
  'A grunt@0.3 plugin': {
    'using grunt-retro': {
      'can read single src files': true,
      'can read multiple src files': true,
      'handles src expansions': true,
      'can read dest': true,
      'can register and use helpers': true,
      'can access utils': true,
      // TODO: There is probably room for abstraction on this last one (mapping of key lookup to key lookup)
      // {'grunt.utils.minimatch': 'grunt.file.glob.minimatch'}
      'can access grunt.file.glob.minimatch': true
    }
  }
}

exports['retro'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'multiTask': function(test) {
    test.expect(1);
    // tests here
    var expectedContent = grunt.file.read('expected/file.js'),
        actualContent = grunt.file.read('actual/file.js');
    test.equal(actualContent, expectedContent, 'should return the correct value.');
    test.done();
  }
};
