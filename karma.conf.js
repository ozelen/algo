module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        reporters: ['dots'],
        files: [
            'src/**/*.alg.js',
            'src/**/*.spec.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],
    });
};