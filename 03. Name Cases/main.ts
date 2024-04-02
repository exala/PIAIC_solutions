let myName = "Hasan abdul ghaffar"

console.log(`Uppercase Name: ${myName.toUpperCase()}`)
console.log(`Lowercase Name: ${myName.toLowerCase()}`)

// for title case
let titleMyName = myName.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ')
console.log(`Titlecase Name: ${titleMyName}`)
