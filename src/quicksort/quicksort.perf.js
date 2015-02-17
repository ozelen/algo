suite('Sorting', function() {
  var list = [2, 4, 10, 0, 1, 5, -2];

  benchmark('quick sorting', function() {
    quickSort(list.slice(0));
  });

  benchmark('native sorting', function() {
    list.slice(0).sort(function(a, b) {
      return a - b;
    });
  });
});