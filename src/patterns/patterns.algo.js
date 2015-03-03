// constructor patterns
var Point = (function() {
  'use strict';

  function Point(x, y) {
    // enforces new
    console.log('this is Point: ', this instanceof Point);
    if (!(this instanceof Point)) {
      return new Point(x, y);
    }
    
    this.moveTo(x,y)
  }

  Point.prototype.moveTo = function(x, y) {
    this.x = x;
    this.y = y;
  };

  return Point;

}());

// Singleton paterns
var singletonPattern = (function() {
  'use strict';

  var instance;

  singletonPattern = function(a,b,c) {
    if (instance) {
      return instance;
    }

    instance = this;

    this.a = a;
    this.b = b;
    this.c = c;
  };

  return singletonPattern;

}());

//
