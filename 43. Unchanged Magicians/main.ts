let magicians = ['Bob','Marley','Sid']

function show_magicians(array){
    // for(let item of array){
    //     console.log(item)
    // }
    make_great(array)
}

function make_great(array){
    for(let item in array){
        let magicians2 = []
        magicians2[item] = `Great ${magicians[item]}`
        console.log(magicians2[item])
    }
    for(let item in array){
        console.log(magicians[item])
    }
}

show_magicians(magicians)