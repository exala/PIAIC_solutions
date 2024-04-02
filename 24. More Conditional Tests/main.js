// Tests for equality and inequality with strings
var oneString = 'Hello';
var twoString = 'World';
console.log('Are the string "Hello" and "World" equal? I predict False');
console.log(oneString == twoString);
console.log('Are the string "Hello" and "World" not equal? I predict True');
console.log(oneString != twoString);
// Tests using the lower case function
oneString = 'hello';
twoString = 'HELLO';
console.log('Are the string "hello" and "HELLO" equal? I predict False');
console.log(oneString == twoString);
console.log('Are the string "hello" and lowercase of "HELLO" equal? I predict True');
console.log(oneString == twoString.toLocaleUpperCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log('Check if 10 is equal to 10');
console.log(10 == 10);
console.log('Check if 10 is greater than 9');
console.log(10 > 9);
console.log('Check if 10 is less than 19');
console.log(10 < 19);
console.log('Check if 1 is greater than or equal to 0');
console.log(1 >= 0);
console.log('Check if 10 is less than or equal to 0');
console.log(10 <= 0);
// Tests using "and" and "or" operators
var car = 'KIA';
var phone = 'Samsung';
console.log('Check if car is KIA and phone is Motorola');
console.log(car == "KIA" && phone == 'Motorola');
console.log('Check if either the car is KIA or the phone is Motorola');
console.log(car == "KIA" || phone == 'Motorola');
// Test whether an item is in a array
var num = [1, 2, 3, 4, 5, 6];
console.log('Check whether 3 is included in the array');
console.log(num.includes(3));
console.log('Check whether 23 is included in the array');
console.log(num.includes(23));
// Test whether an item is not in a array
console.log('Check whether 23 is not included in the array');
console.log(!num.includes(23));
