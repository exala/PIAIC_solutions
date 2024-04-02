var magicians = ['Bob', 'Marley', 'Sid'];
function show_magicians(array) {
    // for(let item of array){
    //     console.log(item)
    // }
    make_great(array);
}
function make_great(array) {
    for (var item in array) {
        var magicians2 = [];
        magicians2[item] = "Great ".concat(magicians[item]);
        console.log(magicians2[item]);
    }
    for (var item in array) {
        console.log(magicians[item]);
    }
}
show_magicians(magicians);
