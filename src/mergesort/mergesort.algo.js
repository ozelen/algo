var mergeSort = (function () {

  function merge (arrA, arrB) {
    var arrC = [], 
        k, i, j,
        n = arrA.length + arrB.length;

    for(k=0, i=0, j=0; k<n; k++) {
      if (arrB[j] === undefined || (arrA[i] <= arrB[j])) {
        arrC[k] = arrA[i];
        i++;
      } else if (arrA[i] === undefined || (arrB[j] < arrA[i])) {
        arrC[k] = arrB[j];
        j++;
      }
    }

    return arrC;
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