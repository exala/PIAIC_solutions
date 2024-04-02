var current_users = ['admin', 'Eric', 'John', 'Cena', 'Susan'];
var new_users = ['Fang', 'Susan', 'Lawrence', 'JOhn', 'Ali'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    if (current_users.map(function (v) {
        return v.toLowerCase();
    }).includes(user.toLowerCase())) {
        console.log("You need to enter a new username as ".concat(user, " already exists"));
    }
    else {
        console.log("the username ".concat(user, " is available"));
    }
}
