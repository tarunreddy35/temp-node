const EventEmitter = require('events');



const customEmitter = new EventEmitter()



customEmitter.on('response',(name, id)=>{
    console.log(`data recieved user ${name} with id: ${id}`)
})




customEmitter.on('response',()=>{
    console.log(`here is other data`)
})
customEmitter.emit('response','jhon',34)
