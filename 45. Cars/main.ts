function cars(man, model, ...features: { [key: string]: any }[]) {
    let car_dict = {
        'manufacturer': man,
        'model': model,
        'feature': {}
    }

    for (let item of features) {
        for(let key in item){
            car_dict.feature[key] = item[key]
        }
        
    }
    return car_dict
}

let car_d = cars('Subaro', 'Domingo', {color:'green'}, {engine:'rear'},{abs:false})

console.log(car_d)