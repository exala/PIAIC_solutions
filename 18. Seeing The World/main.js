var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['Italy', 'Japan', 'Africa'];
console.log(places);
var ascending = __spreadArray([], places, true).sort();
// console.log('Alphabetcial Order')
console.log(ascending);
// console.log('Original Order')
console.log(places);
var descending = __spreadArray([], places, true).sort().reverse();
// console.log('Reverse Alphabetcial Order')
console.log(descending);
// console.log('Original Order')
console.log(places);
places.reverse();
// console.log('Reverse Order')
console.log(places);
places.reverse();
// console.log('Reverse Reverse Order')
console.log(places);
places.sort();
console.log(places);
places.sort().reverse();
console.log(places);
