// Karma configuration
// Generated on Mon Jul 20 2015 14:17:58 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-phantomjs-launcher',
      'karma-systemjs',
      'karma-jasmine'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'systemjs',
      'jasmine'
    ],


    // list of files / patterns to load in the browser
    files: [
      //'www/app.spec.ts'
    ],

    systemjs: {
      // Path to your SystemJS configuration file
      configFile: 'config.js',

      // File patterns for your application code, dependencies, and test suites
      files: [
        'www/app.spec.js',
        'www/**/*.js',
        'jspm_packages/**/*.js'
      ],

      // SystemJS configuration specifically for tests, added after your config file.
      // Good for adding test libraries and mock modules
      //config: {
      //  paths: {
      //    'angular-mocks': 'bower_components/angular-mocks/angular-mocks.js'
      //  }
      //},

      // Specify the suffix used for test suite file names.  Defaults to .test.js, .spec.js, _test.js, and _spec.js
      testFileSuffix: '.spec.js'
    },


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
