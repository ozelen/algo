describe('Merge sort algorithm', function() {
  var merge = mergeSort.merge, 
      sort = mergeSort.sort,
      randomArray = util.genArray(100), 
      randomArraySorted = randomArray.slice(0).sort(function(a,b) {
        return a-b;
      });

  it('should sort an array', function() {
    expect(sort([9,2,5,1,8,4,3,6,0,7])).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  it('should sort an array with repetitions', function() {
    expect(sort([100, 74, 74, 38, 82, 41, 16, 17, 22, 45]))
      .toEqual([16, 17, 22, 38, 41, 45, 74, 74, 82, 100]);
  });

  it('should sort a random array', function() {
    expect(sort(randomArray)).toEqual(randomArraySorted);
  });

  it('should merge two arrays', function() {
    expect(merge([1,4,8], [3,18,25])).toEqual([1,3,4,8,18,25]);
  });

  it('should merge two arrays with different length', function() {
    expect(merge([1,4,8,15,17], [3,18,25])).toEqual([1,3,4,8,15,17,18,25]);
  });

  it('should merge two small arrays', function() {
    expect(merge([1,18], [2,3])).toEqual([1,2,3,18]);
  });

  it('should merge two one item arrays', function() {
    expect(merge([2], [1])).toEqual([1,2]);
  });

  it('should merge arrays when one of them is empty', function() {
    expect(merge([2,4,5], [])).toEqual([2,4,5]);
  });

  it('should merge two empty arrays', function() {
    expect(merge([], [])).toEqual([]);
  });

  it('should merge arrays that contain zero', function() {
    expect(merge([2,4,6], [0,5,9])).toEqual([0,2,4,5,6,9]);
  });

  it('should merge arrays that contain negative values', function() {
    expect(merge([-7,2,6], [-5,0,9])).toEqual([-7,-5,0,2,6,9]);
  });

  it('should merge arrays that contain repititive values', function() {
    expect(merge([1,2,3], [3,4,5])).toEqual([1,2,3,3,4,5]);
  });

});