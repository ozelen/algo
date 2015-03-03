suite('Merge sort', function() {
  var randomArray = util.genArray(1000);

  xbenchmark('Default JavaScript sorting', function () {
    randomArray.sort(function (a,b) {
      return a-b;
    });
  });

  benchmark('Merge sort algorithm', function () {
    mergeSort.sort(randomArray);
  });

  benchmark('Merge sort algorithm refactored', function () {
    mergeSortShorter.sort(randomArray);
  });  

});