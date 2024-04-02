function sand() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('The items that you ordered for your sandwich:');
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log('Have fun with your sandwich!\n');
}
sand('lettuce', 'ketchup');
sand('lettuce', 'ketchup', 'onions');
sand('lettuce', 'ketchup', 'beef stack');
