var myName = "Hasan abdul ghaffar";
console.log("Uppercase Name: ".concat(myName.toUpperCase()));
console.log("Lowercase Name: ".concat(myName.toLowerCase()));
// for title case
var titleMyName = myName.split(' ').map(function (w) { return w[0].toUpperCase() + w.substring(1).toLowerCase(); }).join(' ');
console.log("Titlecase Name: ".concat(titleMyName));
