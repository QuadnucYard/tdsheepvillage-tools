
_.prototype.maps = function (list, iteratee, sep = "") { return _.map(list, iteratee).join(sep); }

Array.prototype.groupBy = function (iteratee, context) { return _.groupBy(this, iteratee, context); };
Array.prototype.sortBy = function (iteratee, context) { return _.sortBy(this, iteratee, context); };

Array.prototype.maps = function (callbackfn, sep = "") { return this.map(callbackfn).join(sep); };

String.prototype.takeFrom = function (pattern, offset = 0) { return this.substr(this.indexOf(pattern) + offset); };
String.prototype.last = function () { return this.charAt(this.length - 1); };
