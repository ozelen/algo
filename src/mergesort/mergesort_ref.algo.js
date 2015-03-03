var mergeSortShorter = (function () {

  function merge (arrA, arrB) {
    var arrC = [], k, i, j,
    n = arrA.length + arrB.length;

    for(k = 0, i = 0, j = 0; k < n; k++) {
      arrC[k] = smaller(arrA[i], arrB[j]) ? 
        arrA[i++] : arrB[j++]; 
    }

    return arrC;
  }

  function smaller (a, b) {
    return b === undefined || a < b;
  }

  function sort (arr) {
    var arrA = arr.slice(0, arr.length/2),
        arrB = arr.slice(arr.length/2);
    
    return arr.length > 1 ? merge(sort(arrA), sort(arrB)) : arr;
  }

  return {
    sort : sort,
    merge : merge
  }

}());