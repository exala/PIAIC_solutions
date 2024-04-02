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

console.log('\nWe have found three more people at our table\n')

let firstNewPerson = 'Dumbledore'
let secondNewPerson = 'Longbottom'
let thirdNewPerson = 'Ginny'

guests.unshift(firstNewPerson)
guests.splice(2, 0, secondNewPerson)
guests.push(thirdNewPerson)

console.log(`Dear ${guests[0]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[1]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[2]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[3]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[4]}, you are cordially invited to a dinner at my place.`)
console.log(`Dear ${guests[5]}, you are cordially invited to a dinner at my place.`)

console.log('\nUnfortunately, we can only invite two people for dinner\n')

let delName = guests.pop()
console.log(`Sorry ${delName} but you are uninvited`)

delName = guests.pop()
console.log(`Sorry ${delName} but you are uninvited`)

delName = guests.pop()
console.log(`Sorry ${delName} but you are uninvited`)

delName = guests.pop()
console.log(`Sorry ${delName} but you are uninvited`)

console.log(`${guests[0]} you are still invited`)
console.log(`${guests[1]} you are still invited`)

guests.length = 0

console.log(`\nThis is the empty list: ${guests}`)