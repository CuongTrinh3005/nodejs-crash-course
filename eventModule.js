// return the EventEmitter class
const EventEmitter = require('events');

// create an instance of EventEmitter
const emitter = new EventEmitter();

// register a event listener
emitter.on('messageLogged', () => {
    console.log("Listen the messageLogged event");
});

emitter.addListener('messageLogged', () => {
    console.log("Listen the messageLogged event register by addListener");
});

emitter.on('messageLogged', (args) => {
    console.log('Listen messageLogged event and receive data args:', args);
})

// raise an event
const eventArgs = {id: '1', data: 'Argument body'};
emitter.emit('messageLogged', eventArgs);