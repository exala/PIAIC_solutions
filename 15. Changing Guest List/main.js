var guests = ['Harry', 'Ron', 'Hermione'];
console.log("Dear ".concat(guests[0], ", you are cordially invited to a dinner at my place."));
console.log("Dear ".concat(guests[1], ", you are cordially invited to a dinner at my place."));
console.log("Dear ".concat(guests[2], ", you are cordially invited to a dinner at my place."));
console.log("".concat(guests[1], " cannot make it."));
// change the name Ron by Draco
guests[1] = 'Draco';
console.log("Dear ".concat(guests[0], ", you are cordially invited to a dinner at my place."));
console.log("Dear ".concat(guests[1], ", you are cordially invited to a dinner at my place."));
console.log("Dear ".concat(guests[2], ", you are cordially invited to a dinner at my place."));
