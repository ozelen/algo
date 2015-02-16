suite('Array search', function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    benchmark('util.contains', function() {
        util.contains(array, 0);
        util.contains(array, 1);
        util.contains(array, 5);
        util.contains(array, 10);
        util.contains(array, 11);
    });
    benchmark('Array.indexOf', function() {
        array.indexOf(0) !== -1;
        array.indexOf(1) !== -1;
        array.indexOf(5) !== -1;
        array.indexOf(10) !== -1;
        array.indexOf(11) !== -1;
    });
});

suite('Array iteration', function() {
    benchmark('util.each', function() {
        util.each([1, 2, 3, 4, 5], function(number) {
            return number;
        });
    });
    benchmark('Array.forEach', function() {
        [1, 2, 3, 4, 5].forEach(function(number) {
            return number;
        });
    });
});