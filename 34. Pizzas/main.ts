let pizzas = ['Pepperoni','Cheese','Bbq']

for(let pizza of pizzas){
    console.log(pizza)
}

for(let pizza of pizzas){
    console.log(`I like ${pizza.toLocaleLowerCase()} pizza`)
}

console.log(`I love pizzas specially the ${pizzas[0]} one, the ${pizzas[1]} and the ${pizzas[2]} one. I really like pizzas a lot`)