module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['benchmark'],
        reporters: ['benchmark'],
        autoWatch: false,
        colors: true,
        files: [
            'src/util/*.algo.js',
            'src/util/*.perf.js'
        ],
        plugins: [
            'karma-benchmark',
            'karma-benchmark-reporter',
            'karma-chrome-launcher'
        ]
    }); 
};