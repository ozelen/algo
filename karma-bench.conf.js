module.exports = function(config) {
  var dir = 'loops';

  config.set({
    browsers: ['Chrome'],
    frameworks: ['benchmark'],
    reporters: ['benchmark'],
    autoWatch: false,
    colors: true,
    files: [
    'lib/bench.js',
    'src/util/util.algo.js',
    'src/' + dir + '/*.algo.js',
    'src/' + dir + '/*.perf.js'
    ],
    plugins: [
    'karma-benchmark',
    'karma-benchmark-reporter',
    'karma-chrome-launcher'
    ]
  }); 
};