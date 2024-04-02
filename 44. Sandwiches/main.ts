function sand(...items){
    console.log('The items that you ordered for your sandwich:')
    for(let item of items){
        console.log(item)
    }
    console.log('Have fun with your sandwich!\n')
}

sand('lettuce','ketchup')
sand('lettuce','ketchup','onions')
sand('lettuce','ketchup','beef stack')