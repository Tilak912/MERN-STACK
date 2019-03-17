var events = require('events');

var eventEmitter = new events.EventEmitter();

//creating eventHandler
var myEventEmitter = () => {
    console.log("I have to code!!!");
}

//assigning eventHandler to an event
eventEmitter.on('code', myEventEmitter);
eventEmitter.emit('code');
