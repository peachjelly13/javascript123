const EventEmiiter = require('events')

const NewEventEmitter = new EventEmiiter()
NewEventEmitter.on('response',(name,id)=>{
    console.log(`data received user ${name} and user id ${id}`)
})

NewEventEmitter.on('response',()=>{
    console.log('Other random values')
})

NewEventEmitter.emit('response','sliva',34)

