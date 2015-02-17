describe('Utils', function() {

  it('should generate array with random elements', function() {
    expect(util.genArray(10).length).toEqual(10);
    expect(util.genArray(20).length).toEqual(20);
  });

  it('should contain defined values', function() {
    util.genArray(10).map(function (item) {
      expect(item).toBeDefined();
    })
  });

  it('should contain numbers between 0 and 100', function() {
    util.genArray(5).map(function (item) {
      expect(typeof(item)).toBe('number');
      expect(function() { return item > 0 && item < 100; });
    })
  });

});