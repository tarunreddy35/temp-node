const os = require(`os`)

const user = os.userInfo()
console.log(user);


console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release()
    
}

console.log(currentOS)