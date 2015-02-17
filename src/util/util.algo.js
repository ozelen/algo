var util = {};

util.each = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};

util.wl = function(array, callback){
  // var arr = array.slice(0), el;
  while(el = array.shift()) {
    callback(el);
  }
};

util.contains = function(haystack, needle) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
};

util.genArray = function (length) {
  var arr = [], i=0;
  for (var i = 0; i < length; i++) {
    arr[i] = Math.floor((Math.random() * 100) + 1); ;
  };
  return arr;
}