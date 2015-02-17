'use strict'

var loops = (function() {

  function mapIncrement(list) {
    return list.map(function(el) {
      return ++el;
    });
  }

  function whileIncrement(list) {
    var i = 0;

    while (i < list.length) {
      list[i++]++;
    }

    return list;
  }

  function forIncrement (list) {
    var i;

    for (var i = list.length - 1; i >= 0; i--) {
      list[i]++;
    };

    return list;
  }

  function map (list, cb) {
    var newList = [], i = 0;

    for (i = 0; i < list.length; i++) {
      newList.push(cb(list[i]));
    };

    return newList;
  }

  return {
    mapIncrement: mapIncrement,
    whileIncrement: whileIncrement,
    forIncrement: forIncrement,
    map: map
  };
}());