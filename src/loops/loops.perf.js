var list = util.genArray(10000);
//[2, 4, 10, 0, 1, 5, -2];

suite('Loops', function() {

  benchmark('map increment', function() {
    loops.mapIncrement(list.slice(0));
  });

  benchmark('while increment', function() {
    loops.whileIncrement(list.slice(0));
  });

  benchmark('for increment', function() {
    loops.forIncrement(list.slice(0));
  });
});

suite('Maps', function () {
  // var bigList = util.genArray(10000);

  function cb(item) {
    return item++;
  } 

  benchmark('custom map', function() {
    loops.map(list, cb);
  });

  benchmark('native map', function () {
    list.map(cb);
  });
});