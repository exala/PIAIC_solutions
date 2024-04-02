function cars(man, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car_dict = {
        'manufacturer': man,
        'model': model,
        'feature': {}
    };
    for (var _a = 0, features_1 = features; _a < features_1.length; _a++) {
        var item = features_1[_a];
        for (var key in item) {
            car_dict.feature[key] = item[key];
        }
    }
    return car_dict;
}
var car_d = cars('Subaro', 'Domingo', { color: 'green' }, { engine: 'rear' }, { abs: false });
console.log(car_d);
