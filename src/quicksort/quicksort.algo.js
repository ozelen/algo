var quickSort = (function (arr) {

  function sort(arr) {
    var i, pivot = arr[arr.length-1];

    for (i = 0; i < arr.length; i++) {
      if (arr[i] > pivot) {
        arr[i];
      }
    }
    
    return [];
  }

  return {
    sort: sort
  };
}());