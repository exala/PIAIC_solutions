let magicians = ['Bob','Marley','Sid']

function show_magicians(array){
    // for(let item of array){
    //     console.log(item)
    // }
    make_great(array)
}

function make_great(array){
    for(let item in array){
        magicians[item] = `Great ${magicians[item]}`
        console.log(magicians[item])
    }
}

show_magicians(magicians)