let places = ['Italy', 'Japan', 'Africa']

console.log(places)

let ascending = [...places].sort()
// console.log('Alphabetcial Order')
console.log(ascending)

// console.log('Original Order')
console.log(places)

let descending = [...places].sort().reverse()
// console.log('Reverse Alphabetcial Order')
console.log(descending)

// console.log('Original Order')
console.log(places)

places.reverse()
// console.log('Reverse Order')
console.log(places)

places.reverse()
// console.log('Reverse Reverse Order')
console.log(places)

places.sort()
console.log(places)

places.sort().reverse()
console.log(places)