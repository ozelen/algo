describe('Testing Quicksort', function() {
  
  it('should sort simple numbers array', function() {
    expect(quickSort([2,4,1,5])).toEqual([1,2,4,5]);
  });

  it('should sort as digits', function() {
    expect(quickSort([2,4,10,0,1,5,-2])).toEqual([-2,0,1,2,4,5,10]);
  });
});