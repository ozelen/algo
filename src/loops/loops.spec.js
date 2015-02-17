describe('Loops', function() {
  it('should MAP increment all elements with 1 by', function() {
    expect(loops.mapIncrement([1,2,3])).toEqual([2,3,4]);
  });

  it('should WHILE increment all elements with 1 by', function() {
    expect(loops.whileIncrement([1,2,3])).toEqual([2,3,4]);
  });

  it('should FOR increment all elements with 1 by', function() {
    expect(loops.forIncrement([1,2,3])).toEqual([2,3,4]);
  });

  it('should behave like Array.prototype.map', function() {
    callback = function (item) { return item * 2; };
    expect(loops.map([1,2,3,4,5], callback)).toEqual([2,4,6,8,10]);
  });
});
