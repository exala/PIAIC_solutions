var pizzas = ['Pepperoni', 'Cheese', 'Bbq'];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza.toLocaleLowerCase(), " pizza"));
}
console.log("I love pizzas specially the ".concat(pizzas[0], " one, the ").concat(pizzas[1], " and the ").concat(pizzas[2], " one. I really like pizzas a lot"));
