/*
 * grunt-retro
 * https://github.com/twolfson/grunt-retro
 *
 * Copyright (c) 2013 Todd Wolfson
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  // Proxy registerTask
  var registerTaskFn = grunt.registerTask;
  grunt.registerTask = function (taskName, taskList, taskFn) {
    // Capture arguments for manipulation
    var args = [].slice.call(arguments);

    // If there is no taskFn
    if (!taskFn) {
      // and if taskList is not an array
      if (!Array.isArray(taskList)) {
        args[1] = taskList.split(/\s+/g);
      }
    }

    // Invoke the original function
    return registerTaskFn.apply(this, args);
  };
};
