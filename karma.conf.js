module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'src/**/*.spec.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-phantomjs-launcher'
        ],
    });
};