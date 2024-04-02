let usernames = ['admin','Eric','John','Cena','Susan']

for(let names of usernames){
    if(names == 'admin'){
        console.log(`Hello ${names}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${names}, thank you for logging in again`)
    }
}