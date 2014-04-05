(function () {
  Array.prototype.toString = function arrayString() {
    function hasArray(array) {
      for (var key in array) {
        if (array[key] instanceof Array) return true;
      }
      return false;
    }
    var array = this;
    if (!(array instanceof Array)) return this.toString();
    if (hasArray(array) === false) {
      return '[' + Array.prototype.join.call(array) + ']';
    } else {
      var ary = [];
      for (var key in array) {
        ary.push(
          array[key] instanceof Array ? arrayString.call(array[key]) : array[key]);
      }
      return '[' + ary.join(',') + ']';
    }
  };
})();
