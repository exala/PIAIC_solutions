let current_users = ['admin','Eric','John','Cena','Susan']

let new_users = ['Fang','Susan','Lawrence','JOhn','Ali']

for(let user of new_users){
    if(current_users.map(function(v) {
        return v.toLowerCase();
      }).includes(user.toLowerCase())){
        console.log(`You need to enter a new username as ${user} already exists`)
    }
    else{
        console.log(`The username ${user} is available`)
    }
}