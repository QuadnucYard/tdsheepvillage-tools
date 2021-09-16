Array.prototype.clear = function () { this.length = 0; }

Array.prototype.removeAt = function (index) { this.splice(index, 1); }

String.prototype.replaceAll = function (pat, repl) { return this.replace(new RegExp(pat, "g"), repl); };

const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);

function getHashCode(str, caseSensitive = false) {
    if (!caseSensitive) {
        str = str.toLowerCase();
    }
    let hash = 1315423911;
    for (let i = str.length - 1; i >= 0; i--) {
        hash ^= ((hash << 5) + str.charCodeAt(i) + (hash >> 2));
    }
    return (hash & 0x7FFFFFFF);
}

const isAlpha = function (val) { return /^[a-zA-Z]+$/.test(val); }

const compareNumber = function (a, b) { return a < b ? -1 : a > b ? 1 : 0; };

const compareByLess = function (a, b, less) { return less(a, b) ? -1 : less(b, a) ? 1 : 0; };

const pad = function (str, len, fill = '0') { return str.length >= len ? str : fill.repeat(len - str.length) + str; };