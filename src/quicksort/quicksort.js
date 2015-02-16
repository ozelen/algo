suite('Iteration', function() {
    console.log('HELLO');
    benchmark('_.each with array', function() {

        benchmark('native forEach', function() {
            this.list.forEach(function(number) {
                return number;
            });
        });

    }, {
        onCycle: function(event) {
            var suite = this;
            var benchmark = event.target;
            console.log('Cycle completed for ' + suite.name + ': ' + benchmark.name);
        },
        setup: function() {
            this.list = [5, 4, 3];
        },
        teardown: function() {
            this.list = null;
        }
    });
});