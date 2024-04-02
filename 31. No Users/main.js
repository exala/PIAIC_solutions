var usernames = [];
if (usernames.length == 0) {
    console.log('We need to find some users!');
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var names = usernames_1[_i];
        if (names == 'admin') {
            console.log("Hello ".concat(names, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(names, ", thank you for logging in again"));
        }
    }
}
