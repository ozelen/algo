suite('Merge sort', function() {
  var randomArray = util.genArray(1000);

  benchmark('Default JavaScript sorting', function () {
    randomArray.sort(function (a,b) {
      return a-b;
    });
  });

  benchmark('Merge sort algorithm', function () {
    mergeSort.sort(randomArray);
  });

  xbenchmark('Merge sort algorithm refactored', function () {
    mergeSortShorter.sort(randomArray);
  });  

});