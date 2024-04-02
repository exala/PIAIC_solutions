var magicians = ['Bob', 'Marley', 'Sid'];
function show_magicians(array) {
    // for(let item of array){
    //     console.log(item)
    // }
    make_great(array);
}
function make_great(array) {
    for (var item in array) {
        magicians[item] = "Great ".concat(magicians[item]);
        console.log(magicians[item]);
    }
}
show_magicians(magicians);
