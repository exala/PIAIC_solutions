let guests = ['Harry','Ron','Hermione']

console.log(`Dear ${guests[0]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[1]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[2]}, you are cordially invited to a dinner at my place.`)

console.log(`${guests[1]} cannot make it.`)

// change the name Ron by Draco

guests[1] = 'Draco'

console.log(`Dear ${guests[0]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[1]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[2]}, you are cordially invited to a dinner at my place.`)