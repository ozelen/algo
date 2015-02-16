describe('Testing Quicksort', function() {
  
  it('should sort simple numbers array', function() {
    expect(quickSort([2,4,1,5])).toEqual([1,2,4,5]);
  });
});