
_.prototype.maps = function (list, iteratee, sep = "") { return _.map(list, iteratee).join(sep); }

Array.prototype.groupBy = function (iteratee, context) { return _.groupBy(this, iteratee, context); };
Array.prototype.sortBy = function (iteratee, context) { return _.sortBy(this, iteratee, context); };
Array.prototype.uniq = function (isSorted, iteratee) { return _.uniq(this, isSorted, iteratee); };
Array.prototype.maps = function (callbackfn, sep = "") { return this.map(callbackfn).join(sep); };
Array.prototype.sum = function (pred = t => t, initial = 0) {
    return this.reduce((prev, cur) => prev + pred(cur), initial);
}

String.prototype.takeFrom = function (pattern, offset = 0) { return this.substr(this.indexOf(pattern) + offset); };
String.prototype.last = function () { return this.charAt(this.length - 1); };
